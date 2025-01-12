import { SkeletonsList } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { CategoriesListItemSkeleton } from '@features/categories/components';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { View } from 'react-native';

import { MembersList } from '../components';
import { useMembers } from '../hooks';
import { selectApiMembersFilter, selectMembersSort } from '../selectors';

const Members = () => {
  const filter = useAppSelector(selectApiMembersFilter);
  const sort = useAppSelector(selectMembersSort);
  const { members, isLoading, isRefetching, refetch } = useMembers({ filter, sort });

  return (
    <View style={flex1}>
      {isLoading ? (
        <SkeletonsList
          style={padding('top')('xxs')}
          ItemComponent={CategoriesListItemSkeleton}
        />
      ) : (
        <MembersList
          isRefreshing={isRefetching}
          onRefresh={refetch}
          members={members}
        />
      )}
    </View>
  );
};

export default Members;
