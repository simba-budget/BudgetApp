import { GoalsActions } from '@features/goals/containers';
import { SubscriptionsActions } from '@features/subscriptions/containers';
import { TransactionsActions } from '@features/transactions/containers';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { GoalsScreen, HomeScreen, SubscriptionsScreen, TransactionsScreen } from '@screens';

import { bottomTabsOptions } from '../../options';

import {
  BottomTabsNavigation,
  BottomTabsParams,
  bottomTabsRoute,
  goalsRoute,
  homeRoute,
  subscriptionsRoute,
  transactionsRoute,
} from './types';

const transactionsOptions: BottomTabNavigationOptions = {
  headerRight: TransactionsActions,
};

const goalsOptions: BottomTabNavigationOptions = {
  headerRight: GoalsActions,
};

const subscriptionsOptions: BottomTabNavigationOptions = {
  headerRight: SubscriptionsActions,
};

const BottomTabs = createBottomTabNavigator<BottomTabsParams>({
  initialRouteName: homeRoute,
  screenOptions: bottomTabsOptions,
  screens: {
    [homeRoute]: HomeScreen,
    [transactionsRoute]: { screen: TransactionsScreen, options: transactionsOptions },
    [goalsRoute]: { screen: GoalsScreen, options: goalsOptions },
    [subscriptionsRoute]: { screen: SubscriptionsScreen, options: subscriptionsOptions },
  },
});

export { type BottomTabsParams, type BottomTabsNavigation, bottomTabsRoute };
export default BottomTabs;
