import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountId } from '@features/accounts/selectors';

const useIsAccountSelected = () => !!useAppSelector(selectSelectedAccountId);

export default useIsAccountSelected;
