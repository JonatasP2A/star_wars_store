import React, { ReactElement, useEffect, useState, useContext } from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from 'styled-components';
import { navigationRef } from '../../routes/app.routes';

type FontSource = Parameters<typeof Font.loadAsync>[0];
const usePromiseAll = (
  promises: Promise<void | void[] | Asset[]>[],
  cb: () => void
) =>
  useEffect(() => {
    (async () => {
      await Promise.all(promises);
      cb();
    })();
  });

const useLoadAssets = (assets: number[], fonts: FontSource): boolean => {
  const [ready, setReady] = useState(false);
  usePromiseAll(
    [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
    () => setReady(true)
  );
  return ready;
};

interface LoadAssetsProps {
  fonts?: FontSource;
  assets?: number[];
  children: ReactElement | ReactElement[];
}

const LoadAssets = ({ assets, fonts, children }: LoadAssetsProps) => {
  const theme = useContext(ThemeContext);

  const ready = useLoadAssets(assets || [], fonts || {});

  if (!ready) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={theme.colors.background} />
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;
