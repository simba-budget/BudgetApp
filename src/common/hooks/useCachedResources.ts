import { getTokens } from '@api/auth/storage';
import { useAppDispatch } from '@core/store/store';
import { selectAccountAction } from '@features/accounts/actions';
import { getAccount } from '@features/accounts/storage';
import { setTokensAction } from '@features/auth/actions';
import { useCallback, useEffect, useState } from 'react';

const useCachedResources = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadCachedResources = useCallback(async () => {
    const [tokens, account] = await Promise.all([getTokens(), getAccount()]);
    if (tokens) await dispatch(setTokensAction(tokens));
    if (account) await dispatch(selectAccountAction(account));
  }, [dispatch]);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoaded(true));
  }, [loadCachedResources]);

  return { isLoaded };
};

export default useCachedResources;
