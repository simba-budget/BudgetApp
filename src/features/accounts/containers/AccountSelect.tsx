import { Account } from '@api/clients/accounts/types';
import { Profile } from '@api/clients/profile/types';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { useProfile } from '@features/profile/hooks';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { selectAccountAction } from '../actions';
import { AccountDetails, AccountsListItem } from '../components';
import { useAccounts } from '../hooks';
import { selectSelectedAccountStrict } from '../selectors';

const AccountSelect = () => {
  const dispatch = useAppDispatch();
  const selectedAccount = useAppSelector(selectSelectedAccountStrict);
  const navigation = useNavigation<RootNavigation>();
  const { profile } = useProfile();
  const { accounts } = useAccounts();

  const handleOnAccountPress = useCallback(
    (account: Account) => {
      navigation.goBack();
      dispatch(selectAccountAction(account));
    },
    [navigation, dispatch],
  );

  return (
    <View>
      <AccountDetails profile={profile as Profile} />
      <View style={[padding('horizontal')('m'), gap('row')('xs')]}>
        {accounts.map((account) => (
          <AccountsListItem
            key={account.id}
            account={account}
            isSelected={account.id === selectedAccount.id}
            onPress={() => handleOnAccountPress(account)}
          />
        ))}
      </View>
    </View>
  );
};

export default AccountSelect;
