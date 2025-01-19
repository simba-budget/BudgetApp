import { getLoggedUser } from '@api/auth/storage';
import { getAccount } from '@api/clients/accounts';
import { useAppDispatch } from '@core/store/store';
import { selectAccountIdAction } from '@features/accounts/actions';
import { selectAccount } from '@features/accounts/slice';
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

    if (selectedAccountId) {
      await dispatch(selectAccountIdAction(selectedAccountId));
      const { data } = await getAccount(selectedAccountId);
      dispatch(selectAccount({ account: data }));
    }
  }, [dispatch]);

  useEffect(() => {
    loadCachedResources().finally(() => setIsLoaded(true));
  }, [loadCachedResources]);

  return { isLoaded };
};

export default useCachedResources;
