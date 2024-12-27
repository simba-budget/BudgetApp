import { Member } from '@api/clients/members/types';
import { Button } from '@common/v2/components';
import { Text } from '@common/v2/components';
import { useMembersTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface MemberDetailsProps {
  style?: StyleProp<ViewStyle>;
  member: Member | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const MemberDetails = ({
  member,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: MemberDetailsProps) => {
  const { t } = useMembersTranslations();

  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={isLoading || isRefreshing} />
      }
      contentContainerStyle={padding('full')('m')}>
      <Text>{JSON.stringify(member, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default MemberDetails;
