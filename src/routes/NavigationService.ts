import { createNavigationContainerRef } from '@react-navigation/core';
import { RootStackParamList } from './app.routes';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<T extends keyof RootStackParamList>(
  name: T,
  params: RootStackParamList[T]
) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate<T>(name, params);
  }
}

export function goBack() {
  if (navigationRef.current?.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
}
