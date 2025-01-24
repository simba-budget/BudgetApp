import { ScrollView } from '@common/components';
import { gap, padding } from '@styles/lightTheme';
import React from 'react';

import { ProfileHeader, ProfileSection } from '../components';
import { useProfile, useProfileShortSections } from '../hooks';

const Profile = () => {
  const sections = useProfileShortSections();
  const { profile, isRefetching, refetch, isLoading } = useProfile();

  if (!profile) return null;

  return (
    <ScrollView
      contentContainerStyle={[gap('row')('l'), padding('bottom')('m')]}
      onRefresh={refetch}
      refreshing={isLoading || isRefetching}>
      <ProfileHeader profile={profile} />
      {sections.map((section, index) => (
        <ProfileSection {...section} key={index} />
      ))}
    </ScrollView>
  );
};

export default Profile;
