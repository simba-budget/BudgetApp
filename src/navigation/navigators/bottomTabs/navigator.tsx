import { GoalsActions } from '@features/goals/containers';
import { SubscriptionsActions } from '@features/subscriptions/containers';
import { TransactionsActions } from '@features/transactions/containers';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { StaticParamList } from '@react-navigation/native';
import {
  GoalsScreen,
  HomeScreen,
  ProfileScreen,
  SubscriptionsScreen,
  TransactionsScreen,
} from '@screens';
import React from 'react';

import { TabBarIcon } from '../../components';
import { bottomTabsOptions } from '../../options';

import {
  goalsRoute,
  homeRoute,
  profileRoute,
  subscriptionsRoute,
  transactionsRoute,
} from './types';

const homeOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarIcon: (props) => <TabBarIcon iconName="home" {...props} />,
};

const transactionsOptions: BottomTabNavigationOptions = {
  headerRight: TransactionsActions,
  tabBarIcon: (props) => <TabBarIcon iconName="card" {...props} />,
};

const goalsOptions: BottomTabNavigationOptions = {
  headerRight: GoalsActions,
  tabBarIcon: (props) => <TabBarIcon iconName="chart" {...props} />,
};

const subscriptionsOptions: BottomTabNavigationOptions = {
  headerRight: SubscriptionsActions,
  tabBarIcon: (props) => <TabBarIcon iconName="card" {...props} />,
};

const profileOptions: BottomTabNavigationOptions = {
  headerTitleAlign: 'center',
  tabBarIcon: (props) => <TabBarIcon iconName="profile" {...props} />,
};

const BottomTabs = createBottomTabNavigator({
  initialRouteName: homeRoute,
  screenOptions: bottomTabsOptions,
  screens: {
    [homeRoute]: { screen: HomeScreen, options: homeOptions },
    [transactionsRoute]: {
      screen: TransactionsScreen,
      options: transactionsOptions,
    },
    [goalsRoute]: { screen: GoalsScreen, options: goalsOptions },
    [subscriptionsRoute]: {
      screen: SubscriptionsScreen,
      options: subscriptionsOptions,
    },
    [profileRoute]: { screen: ProfileScreen, options: profileOptions },
  },
});

export type BottomTabsParams = StaticParamList<typeof BottomTabs>;
export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParams>;

export default BottomTabs;
