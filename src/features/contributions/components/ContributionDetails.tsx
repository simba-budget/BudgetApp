import { Contribution } from '@api/clients/contributions/types';
import { Text } from '@common/components';
import { Button } from '@common/components';
import { useContributionsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleProp, ViewStyle } from 'react-native';

export interface ContributionDetailsProps {
  style?: StyleProp<ViewStyle>;
  contribution: Contribution | null;
  isLoading: boolean;
  isRefreshing: boolean;
  onRefresh: () => void;
  onEditPress: () => void;
}

const ContributionDetails = ({
  contribution,
  isLoading,
  onRefresh,
  isRefreshing,
  style,
  onEditPress,
}: ContributionDetailsProps) => {
  const { t } = useContributionsTranslations();

  return (
    <ScrollView
      style={style}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={isLoading || isRefreshing}
        />
      }
      contentContainerStyle={padding('full')('m')}>
      <Text>{JSON.stringify(contribution, null, 2)}</Text>
      <Button style={margin('top')('m')} onPress={onEditPress} title={t('Edit')} />
    </ScrollView>
  );
};

export default ContributionDetails;
