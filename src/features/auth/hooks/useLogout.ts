import { useAppDispatch } from '@core/store/store';

import { logoutAction } from '../actions';

const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  return { logout };
};

export default useLogout;
