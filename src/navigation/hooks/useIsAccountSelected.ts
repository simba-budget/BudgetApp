import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountId } from '@features/accounts/selectors';
import useIsLoggedIn from '@navigation/hooks/useIsLoggedIn';

const useIsAccountSelected = () => {
  const isLoggedIn = useIsLoggedIn();
  const selectedAccountId = useAppSelector(selectSelectedAccountId);
  return isLoggedIn && !!selectedAccountId;
};

export default useIsAccountSelected;
