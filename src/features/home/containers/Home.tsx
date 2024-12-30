import { Button, ScrollView, Text } from '@common/v2/components';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccount } from '@features/accounts/selectors';
import { MainNavigation, toAccounts } from '@navigation/navigators/main';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React from 'react';
import { SafeAreaView } from 'react-native';

const Home = () => {
  const navigation = useNavigation<MainNavigation>();
  const selectedAccount = useAppSelector(selectSelectedAccount);

  return (
    <SafeAreaView style={flex1}>
      <ScrollView>
        <Button onPress={() => toAccounts(navigation)} title="Accounts" />
        <Text>{JSON.stringify(selectedAccount, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
