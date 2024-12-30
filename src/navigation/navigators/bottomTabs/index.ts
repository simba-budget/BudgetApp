import { GoalsActions } from '@features/goals/containers';
import { SubscriptionsActions } from '@features/subscriptions/containers';
import { TransactionsActions } from '@features/transactions/containers';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  GoalsScreen,
  HomeScreen,
  ProfileScreen,
  SubscriptionsScreen,
  TransactionsScreen,
} from '@screens';

import { bottomTabsOptions } from '../../options';

import {
  BottomTabsNavigation,
  BottomTabsParams,
  bottomTabsRoute,
  goalsRoute,
  homeRoute,
  profileRoute,
  subscriptionsRoute,
  transactionsRoute,
} from './types';

const homeOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const transactionsOptions: BottomTabNavigationOptions = {
  headerRight: TransactionsActions,
};

const goalsOptions: BottomTabNavigationOptions = {
  headerRight: GoalsActions,
};

const subscriptionsOptions: BottomTabNavigationOptions = {
  headerRight: SubscriptionsActions,
};

const profileOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
};

const BottomTabs = createBottomTabNavigator<BottomTabsParams>({
  initialRouteName: homeRoute,
  screenOptions: bottomTabsOptions,
  screens: {
    [homeRoute]: { screen: HomeScreen, options: homeOptions },
    [transactionsRoute]: { screen: TransactionsScreen, options: transactionsOptions },
    [goalsRoute]: { screen: GoalsScreen, options: goalsOptions },
    [subscriptionsRoute]: { screen: SubscriptionsScreen, options: subscriptionsOptions },
    [profileRoute]: { screen: ProfileScreen, options: profileOptions },
  },
});

export { type BottomTabsParams, type BottomTabsNavigation, bottomTabsRoute };
export default BottomTabs;
