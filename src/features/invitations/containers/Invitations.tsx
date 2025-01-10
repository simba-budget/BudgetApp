import { Invitation } from '@api/clients/invitations/types';
import { Button } from '@common/components';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import {
  RootNavigation,
  toInvitation,
  toInvitationAdd,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { InvitationsList, InvitationsSearch } from '../components';
import { useInvitationsInfinity } from '../hooks';
import { selectApiInvitationsFilter, selectInvitationsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Invitations = () => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiInvitationsFilter);
  const sort = useAppSelector(selectInvitationsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const {
    invitations,
    isLoading,
    isRefetching,
    refetch,
    isFetchingMore,
    fetchMore,
  } = useInvitationsInfinity({
    filter: debouncedFilter,
    sort,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnInvitationPress = useCallback(
    (invitation: Invitation) => toInvitation(navigation, { id: invitation.id }),
    [navigation],
  );

  return (
    <SafeAreaView style={flex1}>
      <View style={padding('horizontal')('m')}>
        <Button onPress={() => toInvitationAdd(navigation)} title="Add" />
      </View>
      <InvitationsSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <InvitationsList
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        invitations={invitations}
        onInvitationPress={handleOnInvitationPress}
      />
    </SafeAreaView>
  );
};

export default Invitations;
