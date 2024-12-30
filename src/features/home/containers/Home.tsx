import { Button, ScrollView, Text } from '@common/v2/components';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccount } from '@features/accounts/selectors';
import { useProfile } from '@features/profile/hooks';
import { MainNavigation, toAccounts } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useCallback, useMemo } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { useRecentGoals, useRecentTransactions, useUpcomingSubscriptions } from '../hooks';

const Home = () => {
  const navigation = useNavigation<MainNavigation>();
  const selectedAccount = useAppSelector(selectSelectedAccount);

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
  } = useRecentGoals();

  const {
    subscriptions,
    isLoading: isSubscriptionsLoading,
    refetch: refetchSubscriptions,
    isRefetching: isSubscriptionsRefetching,
  } = useUpcomingSubscriptions();

  const {
    transactions,
    isLoading: isTransactionsLoading,
    refetch: refetchTransactions,
    isRefetching: isTransactionsRefetching,
  } = useRecentTransactions();

  const isLoading = useMemo(
    () =>
      isProfileLoading || isTransactionsLoading || isGoalsLoading || isSubscriptionsLoading,
    [isProfileLoading, isTransactionsLoading, isGoalsLoading, isSubscriptionsLoading],
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
    <SafeAreaView style={flex1}>
      <ScrollView onRefresh={handleOnRefetch} refreshing={isLoading || isRefetching}>
        <Button onPress={() => toAccounts(navigation)} title="Accounts" />
        <Text weight="semiBold" size="m" color="primary">
          Profile
        </Text>
        <View style={styles.section}>
          <Text>{JSON.stringify(profile, null, 2)}</Text>
        </View>
        <Text weight="semiBold" size="m" color="primary">
          Account
        </Text>
        <View style={styles.section}>
          <Text>{JSON.stringify(selectedAccount, null, 2)}</Text>
        </View>
        <Text weight="semiBold" size="m" color="primary">
          Goals
        </Text>
        <View style={styles.section}>
          <Text>{JSON.stringify(goals, null, 2)}</Text>
        </View>
        <Text weight="semiBold" size="m" color="primary">
          Subscriptions
        </Text>
        <View style={styles.section}>
          <Text>{JSON.stringify(subscriptions, null, 2)}</Text>
        </View>
        <Text weight="semiBold" size="m" color="primary">
          Transactions
        </Text>
        <View style={styles.section}>
          <Text>{JSON.stringify(transactions, null, 2)}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    ...padding('full')('m'),
    backgroundColor: colors.background.secondary,
    borderWidth: 1,
    borderColor: colors.border.primary,
    borderRadius: 12,
  },
});

export default Home;
