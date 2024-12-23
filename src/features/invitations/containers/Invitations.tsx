import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { useDebounce } from 'use-debounce';

import { InvitationsList, InvitationsSearch } from '../components';
import { useInvitations } from '../hooks';
import { selectInvitationsFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Invitations = () => {
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectInvitationsFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { invitations, isLoading, isRefetching, refetch } = useInvitations({
    accountId,
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <SafeAreaView style={flex1}>
      <InvitationsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <InvitationsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        invitations={invitations}
        onInvitationPress={console.log}
      />
    </SafeAreaView>
  );
};

export default Invitations;
