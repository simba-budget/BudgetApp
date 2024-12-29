import { Invitation } from '@api/clients/invitations/types';
import { debounceTime } from '@common/constants';
import { Button } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import {
  AccountNavigation,
  toInvitation,
  toInvitationAdd,
} from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import { padding } from '@styles/lightTheme';
import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { InvitationsList, InvitationsSearch } from '../components';
import { useInvitations } from '../hooks';
import { selectInvitationsFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Invitations = () => {
  const navigation = useNavigation<AccountNavigation>();
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

  const handleOnInvitationPress = useCallback(
    (invitation: Invitation) => toInvitation(navigation, { id: invitation.id }),
    [navigation],
  );

  return (
    <SafeAreaView style={flex1}>
      <View style={padding('horizontal')('m')}>
        <Button onPress={() => toInvitationAdd(navigation)} title="Add" />
      </View>
      <InvitationsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <InvitationsList
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
