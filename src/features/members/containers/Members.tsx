import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import React, { useCallback } from 'react';
import { useDebounce } from 'use-debounce';

import { MembersList, MembersSearch } from '../components';
import { useMembers } from '../hooks';
import { selectApiMembersFilter, selectMembersSort } from '../selectors';
import { updateKeyword } from '../slice';

const Members = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiMembersFilter);
  const sort = useAppSelector(selectMembersSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { members, isLoading, isRefetching, refetch } = useMembers({
    filter: debouncedFilter,
    sort,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <>
      <MembersSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <MembersList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        members={members}
      />
    </>
  );
};

export default Members;
