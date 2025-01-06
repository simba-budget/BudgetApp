import { useAppDispatch, useAppSelector } from '@core/store/store';
import { useProfile } from '@features/profile/hooks';
import { MainNavigation, toHome } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import { center, flex1 } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { selectAccountAction } from '../actions';
import { useAccounts } from '../hooks';
import { selectSelectedAccount } from '../selectors';

const AccountsLoading = () => {
  const navigation = useNavigation<MainNavigation>();
  const dispatch = useAppDispatch();
  const account = useAppSelector(selectSelectedAccount);

  const { profile } = useProfile();
  const { accounts } = useAccounts();

  useEffect(() => {
    if (!account || !profile) return;
    toHome(navigation);
  }, [account, navigation, profile]);

  useEffect(() => {
    if (account || !profile) return;
    if (accounts.length === 0) return;
    dispatch(selectAccountAction(accounts[0]));
  }, [account, accounts, dispatch, profile]);

  return (
    <View style={[flex1, center]}>
      <ActivityIndicator size="large" color={colors.text.primary} />
    </View>
  );
};

export default AccountsLoading;
