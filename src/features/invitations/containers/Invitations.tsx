import { SkeletonsList } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import { InvitationsList, InvitationsListItemSkeleton } from '../components';
import { useInvitations } from '../hooks';
import { selectApiInvitationsFilter, selectInvitationsSort } from '../selectors';

const Invitations = () => {
  const filter = useAppSelector(selectApiInvitationsFilter);
  const sort = useAppSelector(selectInvitationsSort);

  const { invitations, isLoading, isRefetching, refetch } = useInvitations({
    filter,
    sort,
  });

  return (
    <View style={flex1}>
      {isLoading ? (
        <SkeletonsList
          style={padding('top')('xxs')}
          ItemComponent={InvitationsListItemSkeleton}
        />
      ) : (
        <InvitationsList
          isRefreshing={isRefetching}
          onRefresh={refetch}
          invitations={invitations}
        />
      )}
    </View>
  );
};

export default Invitations;
