import { Goal } from '@api/clients/goals/types';
import { Subscription } from '@api/clients/subscriptions/types';
import { Transaction } from '@api/clients/transactions/types';
import { ScrollView } from '@common/v2/components';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountStrict } from '@features/accounts/selectors';
import { useProfile } from '@features/profile/hooks';
import {
  AccountNavigation,
  toGoal,
  toSubscription,
  toTransaction,
} from '@navigation/navigators/account';
import {
  BottomTabsNavigation,
  toGoals,
  toProfile,
  toSubscriptions,
  toTransactions,
} from '@navigation/navigators/bottomTabs';
import { MainNavigation, toAccounts } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import {
  AccountSection,
  GoalsSection,
  ProfileSection,
  SubscriptionsSection,
  TransactionsSection,
} from '../components';
import {
  useQuickActionItems,
  useRecentGoals,
  useRecentTransactions,
  useUpcomingSubscriptions,
} from '../hooks';

const Home = () => {
  const mainNavigation = useNavigation<MainNavigation>();
  const accountNavigation = useNavigation<AccountNavigation>();
  const bottomTabsNavigation = useNavigation<BottomTabsNavigation>();
  const selectedAccount = useAppSelector(selectSelectedAccountStrict);
  const quickActions = useQuickActionItems();

  const {
    profile,
    isRefetching: isProfileRefetching,
    refetch: refetchProfile,
    isLoading: isProfileLoading,
  } = useProfile();

  const {
    goals,
    isLoading: isGoalsLoading,
    refetch: refetchGoals,
    isRefetching: isGoalsRefetching,
    total: totalGoals,
  } = useRecentGoals();

  const {
    subscriptions,
    isLoading: isSubscriptionsLoading,
    refetch: refetchSubscriptions,
    isRefetching: isSubscriptionsRefetching,
    total: totalSubscriptions,
  } = useUpcomingSubscriptions();

  const {
    transactions,
    isLoading: isTransactionsLoading,
    refetch: refetchTransactions,
    isRefetching: isTransactionsRefetching,
    total: totalTransactions,
  } = useRecentTransactions();

  const isLoading = useMemo(
    () =>
      isProfileLoading ||
      isTransactionsLoading ||
      isGoalsLoading ||
      isSubscriptionsLoading,
    [
      isProfileLoading,
      isTransactionsLoading,
      isGoalsLoading,
      isSubscriptionsLoading,
    ],
  );

  const isRefetching = useMemo(
    () =>
      isProfileRefetching ||
      isTransactionsRefetching ||
      isGoalsRefetching ||
      isSubscriptionsRefetching,
    [
      isProfileRefetching,
      isTransactionsRefetching,
      isGoalsRefetching,
      isSubscriptionsRefetching,
    ],
  );

  const handleOnRefetch = useCallback(
    () =>
      Promise.resolve([
        refetchTransactions(),
        refetchProfile(),
        refetchGoals(),
        refetchSubscriptions(),
      ]),
    [refetchTransactions, refetchProfile, refetchGoals, refetchSubscriptions],
  );

  const handleOnAccountsPress = useCallback(
    () => toAccounts(mainNavigation),
    [mainNavigation],
  );

  const handleOnTransactionPress = useCallback(
    (transaction: Transaction) =>
      toTransaction(accountNavigation, { id: transaction.id }),
    [accountNavigation],
  );

  const handleOnViewAllTransactionsPress = useCallback(
    () => toTransactions(bottomTabsNavigation),
    [bottomTabsNavigation],
  );

  const handleOnSubscriptionPress = useCallback(
    (subscription: Subscription) =>
      toSubscription(accountNavigation, { id: subscription.id }),
    [accountNavigation],
  );

  const handleOnViewAllSubscriptionsPress = useCallback(
    () => toSubscriptions(bottomTabsNavigation),
    [bottomTabsNavigation],
  );

  const handleOnGoalPress = useCallback(
    (goal: Goal) => toGoal(accountNavigation, { id: goal.id }),
    [accountNavigation],
  );

  const handleOnViewAllGoalsPress = useCallback(
    () => toGoals(bottomTabsNavigation),
    [bottomTabsNavigation],
  );

  const handleOnNotificationsPress = useCallback(
    () => toAccounts(mainNavigation),
    [mainNavigation],
  );

  const handleOnProfilePress = useCallback(
    () => toProfile(bottomTabsNavigation),
    [bottomTabsNavigation],
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onRefresh={handleOnRefetch}
      refreshing={isLoading || isRefetching}>
      <ProfileSection
        onNotificationsPress={handleOnNotificationsPress}
        onProfilePress={handleOnProfilePress}
        profile={profile}
      />
      <AccountSection
        onAccountPress={handleOnAccountsPress}
        account={selectedAccount}
        quickActions={quickActions}
      />
      <GoalsSection
        total={totalGoals}
        goals={goals}
        onGoalPress={handleOnGoalPress}
        onViewAllPress={handleOnViewAllGoalsPress}
      />
      <SubscriptionsSection
        total={totalSubscriptions}
        subscriptions={subscriptions}
        onSubscriptionPress={handleOnSubscriptionPress}
        onViewAllPress={handleOnViewAllSubscriptionsPress}
      />
      <TransactionsSection
        total={totalTransactions}
        transactions={transactions}
        onViewAllPress={handleOnViewAllTransactionsPress}
        onTransactionPress={handleOnTransactionPress}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
});

export default Home;
