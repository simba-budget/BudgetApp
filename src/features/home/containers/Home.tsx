import { Button } from '@common/v2/components';
import { toProfile } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

const Home = () => {
  const navigation = useNavigation<MainNavigation>();

  return (
    <View style={padding('full')('m')}>
      <Button onPress={() => toProfile(navigation)} title="Profile" />
    </View>
  );
};

export default Home;
