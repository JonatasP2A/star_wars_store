import React, { createContext, useContext, useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Facebook from 'expo-facebook';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
  children: React.ReactNode;
}

type User = {
  id: string;
  name: string;
  email: string;
  photo?: string;
};

interface IAuthContextData {
  user: User;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logOut: () => Promise<void>;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export const AuthContext = createContext({} as IAuthContextData);

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;
const { APP_ID } = process.env;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  const signInWithGoogle = async () => {
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();

        const userLogged = {
          id: String(userInfo.id),
          email: userInfo.email,
          name: userInfo.given_name,
          photo: userInfo.picture,
        };

        setUser(userLogged);
        await AsyncStorage.setItem(
          '@star-wars-store:user',
          JSON.stringify(userLogged)
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const signInWithApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const userLogged = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName!.givenName!,
          photo: undefined,
        };

        setUser(userLogged);
        await AsyncStorage.setItem(
          '@star-wars-store:user',
          JSON.stringify(userLogged)
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const signInWithFacebook = async () => {
    try {
      await Facebook.initializeAsync({
        appId: APP_ID,
      });
      const credential = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (credential.type === 'success') {
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${credential.token}`
        );

        const data = await response.json();

        const userLogged = {
          id: String(data.id),
          email: data.email,
          name: data.name,
          photo: data.picture.data.url,
        };

        setUser(userLogged);
        await AsyncStorage.setItem(
          '@star-wars-store:user',
          JSON.stringify(userLogged)
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const logOut = async () => {
    setUser({} as User);
    await AsyncStorage.removeItem('@star-wars-store:user');
  };

  const verifyUserInAsyncStorage = async () => {
    const storage = await AsyncStorage.getItem('@star-wars-store:user');

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      setUser(userLogged);
    }
  };

  useEffect(() => {
    verifyUserInAsyncStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signInWithApple,
        signInWithFacebook,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
