import { Member } from '@api/clients/members/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { AccountNavigation, toMember } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useDebounce } from 'use-debounce';

import { MembersList, MembersSearch } from '../components';
import { useMembersInfinity } from '../hooks';
import { selectApiMembersFilter, selectMembersSort } from '../selectors';
import { updateKeyword } from '../slice';

const Members = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiMembersFilter);
  const sort = useAppSelector(selectMembersSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { members, isLoading, isRefetching, refetch, isFetchingMore, fetchMore } =
    useMembersInfinity({
      filter: debouncedFilter,
      sort,
    });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnMemberPress = useCallback(
    (member: Member) => toMember(navigation, { id: member.id }),
    [navigation],
  );

  return (
    <SafeAreaView style={flex1}>
      <MembersSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <MembersList
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        members={members}
        onMemberPress={handleOnMemberPress}
      />
    </SafeAreaView>
  );
};

export default Members;
