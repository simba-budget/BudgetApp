import { Button, Text } from '@common/v2/components';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccount } from '@features/accounts/selectors';
import { AccountNavigation, toProfile } from '@navigation/navigators/account';
import { MainNavigation, toAccounts } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  const mainNavigation = useNavigation<MainNavigation>();
  const accountNavigation = useNavigation<AccountNavigation>();
  const selectedAccount = useAppSelector(selectSelectedAccount);

  return (
    <View style={padding('full')('m')}>
      <Text>{JSON.stringify(selectedAccount, null, 2)}</Text>
      <Button onPress={() => toAccounts(mainNavigation)} title="Accounts" />
      <Button onPress={() => toProfile(accountNavigation)} title="Profile" />
    </View>
  );
};

export default Home;
