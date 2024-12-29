import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoalsScreen, HomeScreen, SubscriptionsScreen, TransactionsScreen } from '@screens';

import {
  BottomTabsNavigation,
  BottomTabsParams,
  bottomTabsRoute,
  goalsRoute,
  homeRoute,
  subscriptionsRoute,
  transactionsRoute,
} from './types';

const BottomTabs = createBottomTabNavigator<BottomTabsParams>({
  initialRouteName: homeRoute,
  screens: {
    [homeRoute]: HomeScreen,
    [transactionsRoute]: TransactionsScreen,
    [goalsRoute]: GoalsScreen,
    [subscriptionsRoute]: SubscriptionsScreen,
  },
});

export { type BottomTabsParams, type BottomTabsNavigation, bottomTabsRoute };
export default BottomTabs;
