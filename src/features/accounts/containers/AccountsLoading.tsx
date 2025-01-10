import { useAppDispatch, useAppSelector } from '@core/store/store';
import { useProfile } from '@features/profile/hooks';
import { RootNavigation, toHome } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { center, flex1 } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { selectAccountIdAction } from '../actions';
import { useAccounts } from '../hooks';
import { selectSelectedAccountId } from '../selectors';

const AccountsLoading = () => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const selectedAccountId = useAppSelector(selectSelectedAccountId);
  const { profile } = useProfile();
  const { accounts } = useAccounts();

  useEffect(() => {
    if (!selectedAccountId || !profile) return;
    toHome(navigation);
  }, [selectedAccountId, navigation, profile]);

  useEffect(() => {
    if (selectedAccountId || !profile) return;
    if (accounts.length === 0) return;
    dispatch(selectAccountIdAction(accounts[0].id));
  }, [selectedAccountId, accounts, dispatch, profile]);

  return (
    <View style={[flex1, center]}>
      <ActivityIndicator size="large" color={colors.text.primary} />
    </View>
  );
};

export default AccountsLoading;
