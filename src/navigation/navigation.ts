import { createStaticNavigation } from '@react-navigation/native';

import RootStack from './navigators/root';

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
