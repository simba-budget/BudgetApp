import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoalsScreen, HomeScreen, SubscriptionsScreen, TransactionsScreen } from '@screens';

import {
  BottomTabsParamsList,
  goalsRoute,
  homeRoute,
  subscriptionsRoute,
  transactionsRoute,
} from './types';

const BottomTabs = createBottomTabNavigator<BottomTabsParamsList>({
  initialRouteName: homeRoute,
  screens: {
    [homeRoute]: HomeScreen,
    [transactionsRoute]: TransactionsScreen,
    [goalsRoute]: GoalsScreen,
    [subscriptionsRoute]: SubscriptionsScreen,
  },
});

export default BottomTabs;
