import { getLoggedUser } from '@api/auth/storage';
import { useAppDispatch } from '@core/store/store';
import { selectAccountAction } from '@features/accounts/actions';
import { getAccount } from '@features/accounts/storage';
import { loginAction } from '@features/auth/actions';
import { useCallback, useEffect, useState } from 'react';

const useCachedResources = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadCachedResources = useCallback(async () => {
    const [loggedUser, account] = await Promise.all([getLoggedUser(), getAccount()]);
    if (loggedUser) await dispatch(loginAction(loggedUser));
    if (account) await dispatch(selectAccountAction(account));
  }, [dispatch]);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoaded(true));
  }, [loadCachedResources]);

  return { isLoaded };
};

export default useCachedResources;
