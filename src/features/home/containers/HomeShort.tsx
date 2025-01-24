import { ScrollView } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { useAccount } from '@features/accounts/hooks';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useProfile } from '@features/profile/hooks';
import { useHomeTranslations } from '@i18n/hooks';
import {
  BottomTabsNavigation,
  toProfile,
  toTransactions,
} from '@navigation/navigators/bottomTabs';
import {
  RootNavigation,
  toAccountSelect,
  toNotifications,
  toTransactionAdd,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';

import {
  AccountSection,
  AccountSectionSkeleton,
  ProfileSection,
  TransactionsSection,
  TransactionsWeekStats,
} from '../components';
import {
  useRecentExpenses,
  useRecentIncomes,
  useShortQuickActionItems,
  useTransactionsWeekStats,
} from '../hooks';

const HomeShort = () => {
  const { t } = useHomeTranslations();
  const navigation = useNavigation<RootNavigation>();
  const bottomTabsNavigation = useNavigation<BottomTabsNavigation>();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const quickActions = useShortQuickActionItems();

  const {
    account,
    isLoading: isAccountLoading,
    isRefetching: isAccountRefetching,
    refetch: refetchAccount,
  } = useAccount(accountId);

  const {
    data: transactionsStats,
    isLoading: isTransactionsWeekStatsLoading,
    refetch: refetchTransactionsWeekStats,
    isRefetching: isTransactionsWeekStatsRefetching,
    totalAmount,
  } = useTransactionsWeekStats();

  const {
    profile,
    isRefetching: isProfileRefetching,
    refetch: refetchProfile,
    isLoading: isProfileLoading,
  } = useProfile();

  const {
    transactions: expenses,
    isLoading: isExpensesLoading,
    refetch: refetchExpenses,
    isRefetching: isExpensesRefetching,
    total: totalExpenses,
  } = useRecentExpenses();

  const {
    transactions: incomes,
    isLoading: isIncomesLoading,
    refetch: refetchIncomes,
    isRefetching: isIncomesRefetching,
    total: totalIncomes,
  } = useRecentIncomes();

  const isLoading = useMemo(
    () =>
      isProfileLoading ||
      isExpensesLoading ||
      isIncomesLoading ||
      isAccountLoading ||
      isTransactionsWeekStatsLoading,
    [
      isProfileLoading,
      isExpensesLoading,
      isIncomesLoading,
      isAccountLoading,
      isTransactionsWeekStatsLoading,
    ],
  );

  const isRefetching = useMemo(
    () =>
      isProfileRefetching ||
      isExpensesRefetching ||
      isIncomesRefetching ||
      isAccountRefetching ||
      isTransactionsWeekStatsRefetching,
    [
      isProfileRefetching,
      isExpensesRefetching,
      isIncomesRefetching,
      isAccountRefetching,
      isTransactionsWeekStatsRefetching,
    ],
  );

  const handleOnRefetch = useCallback(
    () =>
      Promise.resolve([
        refetchExpenses(),
        refetchIncomes(),
        refetchProfile(),
        refetchAccount(),
        refetchTransactionsWeekStats(),
      ]),
    [
      refetchExpenses,
      refetchIncomes,
      refetchProfile,
      refetchAccount,
      refetchTransactionsWeekStats,
    ],
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
      {account ? (
        <>
          <AccountSection
            onAccountPress={() => toAccountSelect(navigation)}
            account={account}
            quickActions={quickActions}
          />
          <TransactionsWeekStats
            baseCurrency={account?.currency}
            isLoading={isTransactionsWeekStatsLoading}
            totalAmount={totalAmount}
            data={transactionsStats}
          />
        </>
      ) : (
        <AccountSectionSkeleton />
      )}
      <TransactionsSection
        title={t('Recent Expenses')}
        isLoading={isExpensesLoading}
        onTransactionAddPress={() => toTransactionAdd(navigation)}
        total={totalExpenses}
        transactions={expenses}
        onViewAllPress={() => toTransactions(bottomTabsNavigation)}
      />
      <TransactionsSection
        title={t('Recent Incomes')}
        isLoading={isIncomesLoading}
        onTransactionAddPress={() => toTransactionAdd(navigation)}
        total={totalIncomes}
        transactions={incomes}
        onViewAllPress={() => toTransactions(bottomTabsNavigation)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...padding('top')('xs'),
    ...padding('bottom')('m'),
    ...gap('row')('l'),
    paddingHorizontal: 0,
  },
});

export default HomeShort;
