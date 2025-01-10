import { ScrollView } from '@common/components';
import React from 'react';

import { ProfileHeader, ProfileSection } from '../components';
import { useProfile, useProfileSections } from '../hooks';

const Profile = () => {
  const sections = useProfileSections();
  const { profile, isRefetching, refetch, isLoading } = useProfile();

  if (!profile) return null;

  return (
    <ScrollView onRefresh={refetch} refreshing={isLoading || isRefetching}>
      <ProfileHeader profile={profile} />
      {sections.map((section, index) => (
        <ProfileSection {...section} key={index} />
      ))}
    </ScrollView>
  );
};

export default Profile;
