import { useAppSelector } from '@core/store/store';
import { selectIsLoggedIn } from '@features/auth/selectors';

const useIsLoggedIn = () => useAppSelector(selectIsLoggedIn);

export default useIsLoggedIn;
