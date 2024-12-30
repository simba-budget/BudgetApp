import { Profile } from '@api/clients/profile/types';

export const getFullName = (profile: Profile) => {
  return `${profile.firstName} ${profile.lastName}`;
};
