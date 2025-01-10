import { useCachedResources } from '@common/hooks';
import React, { ReactNode, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

export interface CachedResourcesLoader {
  children: ReactNode;
}

const CachedResourcesLoader = ({ children }: CachedResourcesLoader) => {
  const { isLoaded } = useCachedResources();

  useEffect(() => {
    if (isLoaded) SplashScreen.hide();
  }, [isLoaded]);

  if (!isLoaded) return <></>;

  return <>{children}</>;
};

export default CachedResourcesLoader;
