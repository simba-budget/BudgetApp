import useIsLoggedIn from './useIsLoggedIn';

const useIsLoggedOut = () => !useIsLoggedIn();

export default useIsLoggedOut;
