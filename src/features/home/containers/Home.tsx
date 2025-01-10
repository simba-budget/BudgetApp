import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountStrict } from '@features/accounts/selectors';
import { useProfile } from '@features/profile/hooks';
import {
  BottomTabsNavigation,
  toGoals,
  toProfile,
  toSubscriptions,
  toTransactions,
} from '@navigation/navigators/bottomTabs';
import {
  RootNavigation,
  toAccountSelect,
  toGoalAdd,
  toInvitationAdd,
  toNotifications,
  toSubscriptionAdd,
  toTransactionAdd,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'src/common/components';

import {
  AccountSection,
  GoalsSection,
  InvitationAddSection,
  ProfileSection,
  SubscriptionsSection,
  TransactionsSection,
  TransactionsWeekStats,
} from '../components';
import {
  useQuickActionItems,
  useRecentGoals,
  useRecentTransactions,
  useTransactionsWeekStats,
  useUpcomingSubscriptions,
} from '../hooks';

const Home = () => {
  const navigation = useNavigation<RootNavigation>();
  const bottomTabsNavigation = useNavigation<BottomTabsNavigation>();
  const selectedAccount = useAppSelector(selectSelectedAccountStrict);
  const quickActions = useQuickActionItems();

  const {
    data: transactionsStats,
    isLoading: isTransactionsStatsLoading,
    totalAmount,
  } = useTransactionsWeekStats();

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

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      onRefresh={handleOnRefetch}
      refreshing={isLoading || isRefetching}>
      {profile && (
        <ProfileSection
          onNotificationsPress={() => toNotifications(navigation)}
          onProfilePress={() => toProfile(bottomTabsNavigation)}
          profile={profile}
        />
      )}
      <AccountSection
        onAccountPress={() => toAccountSelect(navigation)}
        account={selectedAccount}
        quickActions={quickActions}
      />
      <TransactionsWeekStats
        isLoading={isTransactionsStatsLoading}
        totalAmount={totalAmount}
        data={transactionsStats}
      />
      <GoalsSection
        onGoalAddPress={() => toGoalAdd(navigation)}
        total={totalGoals}
        goals={goals}
        isLoading={isGoalsLoading}
        onViewAllPress={() => toGoals(bottomTabsNavigation)}
      />
      <SubscriptionsSection
        isLoading={isSubscriptionsLoading}
        onSubscriptionAddPress={() => toSubscriptionAdd(navigation)}
        total={totalSubscriptions}
        subscriptions={subscriptions}
        onViewAllPress={() => toSubscriptions(bottomTabsNavigation)}
      />
      <InvitationAddSection
        onInvitationAddPress={() => toInvitationAdd(navigation)}
      />
      <TransactionsSection
        isLoading={isTransactionsLoading}
        onTransactionAddPress={() => toTransactionAdd(navigation)}
        total={totalTransactions}
        transactions={transactions}
        onViewAllPress={() => toTransactions(bottomTabsNavigation)}
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
