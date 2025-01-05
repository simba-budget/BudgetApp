import { Transaction } from '@api/clients/transactions/types';
import { ScrollView } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountStrict } from '@features/accounts/selectors';
import { useProfile } from '@features/profile/hooks';
import { setTransaction } from '@features/transactions/slice';
import {
  AccountNavigation,
  toGoal,
  toGoalAdd,
  toInvitationAdd,
  toSubscription,
  toSubscriptionAdd,
  toTransactionAdd,
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
  InvitationAddSection,
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
  const dispatch = useAppDispatch();
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

  const handleOnTransactionPress = useCallback(
    (transaction: Transaction) => dispatch(setTransaction({ transaction })),
    [dispatch],
  );

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onRefresh={handleOnRefetch}
      refreshing={isLoading || isRefetching}>
      {profile && (
        <ProfileSection
          onNotificationsPress={() => toAccounts(mainNavigation)}
          onProfilePress={() => toProfile(bottomTabsNavigation)}
          profile={profile}
        />
      )}
      <AccountSection
        onAccountPress={() => toAccounts(mainNavigation)}
        account={selectedAccount}
        quickActions={quickActions}
      />
      <WeekStatistic data={weekStatistic} />
      <GoalsSection
        onGoalAddPress={() => toGoalAdd(accountNavigation)}
        total={totalGoals}
        goals={goals}
        isLoading={isGoalsLoading}
        onGoalPress={({ id }) => toGoal(accountNavigation, { id })}
        onViewAllPress={() => toGoals(bottomTabsNavigation)}
      />
      <SubscriptionsSection
        isLoading={isSubscriptionsLoading}
        onSubscriptionAddPress={() => toSubscriptionAdd(accountNavigation)}
        total={totalSubscriptions}
        subscriptions={subscriptions}
        onSubscriptionPress={({ id }) => toSubscription(accountNavigation, { id })}
        onViewAllPress={() => toSubscriptions(bottomTabsNavigation)}
      />
      <InvitationAddSection
        onInvitationAddPress={() => toInvitationAdd(accountNavigation)}
      />
      <TransactionsSection
        isLoading={isTransactionsLoading}
        onTransactionAddPress={() => toTransactionAdd(accountNavigation)}
        total={totalTransactions}
        transactions={transactions}
        onViewAllPress={() => toTransactions(bottomTabsNavigation)}
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
