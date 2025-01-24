import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { StaticParamList } from '@react-navigation/native';
import {
  CategoriesScreen,
  HomeScreen,
  MembersAndInvitationsScreen,
  ProfileScreen,
  TransactionsScreen,
} from '@screens';
import React from 'react';

import { TabBarIcon } from '../../components';
import { bottomTabsOptions } from '../../options';

import {
  categoriesRoute,
  homeRoute,
  membersAndInvitationsRoute,
  profileRoute,
  transactionsRoute,
} from './types';

const homeOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarIcon: (props) => <TabBarIcon iconName="home" {...props} />,
};

const transactionsOptions: BottomTabNavigationOptions = {
  tabBarIcon: (props) => <TabBarIcon iconName="card" {...props} />,
};

const categoriesOptions: BottomTabNavigationOptions = {
  tabBarIcon: (props) => <TabBarIcon iconName="squares" {...props} />,
};

const membersAndInvitationsOptions: BottomTabNavigationOptions = {
  title: 'Members',
  tabBarIcon: (props) => <TabBarIcon iconName="users" {...props} />,
};

const profileOptions: BottomTabNavigationOptions = {
  headerShown: false,
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
    [categoriesRoute]: { screen: CategoriesScreen, options: categoriesOptions },
    [membersAndInvitationsRoute]: {
      screen: MembersAndInvitationsScreen,
      options: membersAndInvitationsOptions,
    },
    [profileRoute]: { screen: ProfileScreen, options: profileOptions },
  },
});

export type BottomTabsParams = StaticParamList<typeof BottomTabs>;
export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParams>;

export default BottomTabs;
