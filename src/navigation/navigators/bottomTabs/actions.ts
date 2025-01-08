import { BottomTabsNavigation } from './navigator';
import {
  goalsRoute,
  profileRoute,
  subscriptionsRoute,
  transactionsRoute,
} from './types';

export const toTransactions = ({ navigate }: BottomTabsNavigation) => {
  return navigate(transactionsRoute);
};

export const toSubscriptions = ({ navigate }: BottomTabsNavigation) => {
  return navigate(subscriptionsRoute);
};

export const toGoals = ({ navigate }: BottomTabsNavigation) => {
  return navigate(goalsRoute);
};

export const toProfile = ({ navigate }: BottomTabsNavigation) => {
  return navigate(profileRoute);
};
