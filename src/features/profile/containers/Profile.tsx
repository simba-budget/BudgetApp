import { Button } from '@common/v2/components';
import { useLogout } from '@features/auth/hooks';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

const Profile = () => {
  const { logout } = useLogout();

  return (
    <View style={padding('full')('m')}>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Profile;
