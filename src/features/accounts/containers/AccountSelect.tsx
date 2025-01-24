import { Account } from '@api/clients/accounts/types';
import { Profile } from '@api/clients/profile/types';
import { Button } from '@common/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { useProfile } from '@features/profile/hooks';
import { useAccountsTranslations } from '@i18n/hooks';
import { accountAddRoute, RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { gap, padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import { selectAccountIdAction } from '../actions';
import { AccountDetails, AccountsListItem } from '../components';
import { useAccounts } from '../hooks';
import { selectSelectedAccountIdStrict } from '../selectors';
import { selectAccount } from '../slice';

const AccountSelect = () => {
  const dispatch = useAppDispatch();
  const { t } = useAccountsTranslations();
  const selectedAccountId = useAppSelector(selectSelectedAccountIdStrict);
  const navigation = useNavigation<RootNavigation>();
  const { profile } = useProfile();
  const { accounts } = useAccounts();

  const handleOnAccountPress = useCallback(
    (account: Account) => {
      navigation.goBack();
      dispatch(selectAccountIdAction(account.id));
      dispatch(selectAccount({ account }));
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
            isSelected={account.id === selectedAccountId}
            onPress={() => handleOnAccountPress(account)}
          />
        ))}
        <Button
          onPress={() => navigation.navigate(accountAddRoute)}
          iconName="plus"
          color="secondary"
          size="medium"
          title={t('Create an Account')}
        />
      </View>
    </View>
  );
};

export default AccountSelect;
