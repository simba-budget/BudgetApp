import { getLoggedUser } from '@api/auth/storage';
import { useAppDispatch } from '@core/store/store';
import { selectAccountIdAction } from '@features/accounts/actions';
import { getSelectedAccountId } from '@features/accounts/storage';
import { loginAction } from '@features/auth/actions';
import { useCallback, useEffect, useState } from 'react';

const useCachedResources = () => {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const loadCachedResources = useCallback(async () => {
    const [loggedUser, selectedAccountId] = await Promise.all([
      getLoggedUser(),
      getSelectedAccountId(),
    ]);

    if (loggedUser) await dispatch(loginAction(loggedUser));
    if (selectedAccountId) await dispatch(selectAccountIdAction(selectedAccountId));
  }, [dispatch]);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoaded(true));
  }, [loadCachedResources]);

  return { isLoaded };
};

export default useCachedResources;
