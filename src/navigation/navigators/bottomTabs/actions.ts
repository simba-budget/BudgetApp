import { BottomTabsNavigation, transactionsRoute } from './types';

export const toTransactions = ({ navigate }: BottomTabsNavigation) => {
  return navigate(transactionsRoute);
};
