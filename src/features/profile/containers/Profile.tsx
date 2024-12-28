import { Button } from '@common/v2/components';
import { useLogout } from '@features/auth/hooks';
import { toTags } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

const Profile = () => {
  const { logout } = useLogout();
  const navigation = useNavigation<MainNavigation>();

  return (
    <View style={padding('full')('m')}>
      <Button title="Tags" onPress={() => toTags(navigation)} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Profile;
