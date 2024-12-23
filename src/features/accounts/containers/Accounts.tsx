import { Account } from '@api/clients/accounts/types';
import { debounceTime } from '@common/constants';
import { Button } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { useAccountsTranslations } from '@i18n/hooks';
import { toHome } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { selectAccountAction } from '../actions';
import { AccountsList, AccountsSearch } from '../components';
import { useAccounts } from '../hooks';
import { selectAccountsFilter, selectSelectedAccount } from '../selectors';
import { updateKeyword } from '../slice';

const Accounts = () => {
  const navigation = useNavigation<MainNavigation>();
  const { t } = useAccountsTranslations();
  const dispatch = useAppDispatch();

  const filter = useAppSelector(selectAccountsFilter);
  const initialAccount = useAppSelector(selectSelectedAccount);

  const [selectedAccount, setSelectedAccount] = useState<Account | null>(initialAccount);
  const [debouncedFilter] = useDebounce(filter, debounceTime);
  const { accounts, isLoading, refetch, isRefetching } = useAccounts(debouncedFilter);

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnSelect = useCallback(async () => {
    if (!selectedAccount) return;
    await dispatch(selectAccountAction(selectedAccount));
    toHome(navigation);
  }, [selectedAccount, dispatch, navigation]);

  return (
    <SafeAreaView style={flex1}>
      <AccountsSearch keyword={filter.keyword} onKeywordChange={handleOnKeywordChange} />
      <AccountsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        accounts={accounts}
        onAccountPress={setSelectedAccount}
        selectedAccountId={selectedAccount?.id}
      />
      <View style={padding('full')('m')}>
        <Button onPress={handleOnSelect} isDisabled={!selectedAccount} title={t('Select')} />
      </View>
    </SafeAreaView>
  );
};

export default Accounts;
