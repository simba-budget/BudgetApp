import { Button } from '@common/v2/components';
import { useLogout } from '@features/auth/hooks';
import { toCategories, toInvitations, toMembers, toTags } from '@navigation/actions';
import { AccountNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

const Profile = () => {
  const { logout } = useLogout();
  const navigation = useNavigation<AccountNavigation>();

  return (
    <View style={padding('full')('m')}>
      <Button title="Categories" onPress={() => toCategories(navigation)} />
      <Button title="Invitations" onPress={() => toInvitations(navigation)} />
      <Button title="Members" onPress={() => toMembers(navigation)} />
      <Button title="Tags" onPress={() => toTags(navigation)} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Profile;
