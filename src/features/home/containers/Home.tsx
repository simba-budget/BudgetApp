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
  toGoalAdd,
  toInvitationAdd,
  toSubscription,
  toSubscriptionAdd,
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
  InvitationsAddSection,
  ProfileSection,
  SubscriptionsSection,
  TransactionsSection,
  WeekStatistic,
} from '../components';
import {
  useQuickActionItems,
  useRecentGoals,
  useRecentTransactions,
  useUpcomingSubscriptions,
  useWeekStatistic,
} from '../hooks';

const Home = () => {
  const mainNavigation = useNavigation<MainNavigation>();
  const accountNavigation = useNavigation<AccountNavigation>();
  const bottomTabsNavigation = useNavigation<BottomTabsNavigation>();
  const selectedAccount = useAppSelector(selectSelectedAccountStrict);
  const quickActions = useQuickActionItems();
  const weekStatistic = useWeekStatistic();

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

  const handleOnSubscriptionAddPress = useCallback(
    () => toSubscriptionAdd(accountNavigation),
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

  const handleOnGoalAddPress = useCallback(
    () => toGoalAdd(accountNavigation),
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

  const handleOnInvitationAddPress = useCallback(
    () => toInvitationAdd(accountNavigation),
    [accountNavigation],
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onRefresh={handleOnRefetch}
      refreshing={isLoading || isRefetching}>
      {profile && (
        <ProfileSection
          onNotificationsPress={handleOnNotificationsPress}
          onProfilePress={handleOnProfilePress}
          profile={profile}
        />
      )}
      <AccountSection
        onAccountPress={handleOnAccountsPress}
        account={selectedAccount}
        quickActions={quickActions}
      />
      <WeekStatistic data={weekStatistic} />
      <GoalsSection
        onGoalAddPress={handleOnGoalAddPress}
        total={totalGoals}
        goals={goals}
        isLoading={isGoalsLoading}
        onGoalPress={handleOnGoalPress}
        onViewAllPress={handleOnViewAllGoalsPress}
      />
      <SubscriptionsSection
        isLoading={isSubscriptionsLoading}
        onSubscriptionAddPress={handleOnSubscriptionAddPress}
        total={totalSubscriptions}
        subscriptions={subscriptions}
        onSubscriptionPress={handleOnSubscriptionPress}
        onViewAllPress={handleOnViewAllSubscriptionsPress}
      />
      <InvitationsAddSection onInvitationAddPress={handleOnInvitationAddPress} />
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
