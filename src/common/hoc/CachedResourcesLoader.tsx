import { useCachedResources } from '@common/hooks';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

const CachedResourcesLoader: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { isLoaded } = useCachedResources();

  useEffect(() => {
    if (isLoaded) SplashScreen.hide();
  }, [isLoaded]);

  if (!isLoaded) return <></>;

  return <>{children}</>;
};

export default CachedResourcesLoader;
