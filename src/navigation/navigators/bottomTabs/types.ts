import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type BottomTabsParams = {
  [homeRoute]: undefined;
  [transactionsRoute]: undefined;
  [goalsRoute]: undefined;
  [subscriptionsRoute]: undefined;
};

export type BottomTabsRoute = 'BottomTabs';
export const bottomTabsRoute: BottomTabsRoute = 'BottomTabs';
export type BottomTabsNavigation = BottomTabNavigationProp<BottomTabsParams>;

export type HomeRoute = 'Home';
export const homeRoute: HomeRoute = 'Home';

export type TransactionsRoute = 'Transactions';
export const transactionsRoute: TransactionsRoute = 'Transactions';

export type GoalsRoute = 'Goals';
export const goalsRoute: GoalsRoute = 'Goals';

export type SubscriptionsRoute = 'Subscriptions';
export const subscriptionsRoute: SubscriptionsRoute = 'Subscriptions';
