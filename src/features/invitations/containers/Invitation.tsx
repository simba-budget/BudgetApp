import React from 'react';

import { InvitationDetails } from '../components';
import { useInvitation } from '../hooks';

export interface InvitationProps {
  id: number;
}

const Invitation = ({ id }: InvitationProps) => {
  const { invitation, refetch, isRefetching, isLoading } = useInvitation(id);

  return (
    <InvitationDetails
      invitation={invitation}
      isLoading={isLoading}
      isRefreshing={isRefetching}
      onRefresh={refetch}
    />
  );
};

export default Invitation;
