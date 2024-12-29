import { useAppSelector } from '@core/store/store';
import { selectIsOnboarded } from '@features/auth/selectors';

const useInOnboarded = () => !useAppSelector(selectIsOnboarded);

export default useInOnboarded;
