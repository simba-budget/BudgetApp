import { getTokens } from '@api/auth/storage';
import { useAppDispatch } from '@core/store/store';
import { setTokensAction } from '@features/auth/actions';
import { useCallback, useEffect, useState } from 'react';

const useCachedResources = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadCachedResources = useCallback(async () => {
    const tokens = await getTokens();
    if (tokens) await dispatch(setTokensAction(tokens));
  }, [dispatch]);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoaded(true));
  }, [loadCachedResources]);

  return { isLoaded };
};

export default useCachedResources;
