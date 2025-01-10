import { useSubscriptionsTranslations } from '@i18n/hooks';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { EmptySection } from 'src/common/components';

export interface SubscriptionsEmptyProps {
  style?: StyleProp<ViewStyle>;
  onAddPress: () => void;
}

const SubscriptionsEmpty = ({ style, onAddPress }: SubscriptionsEmptyProps) => {
  const { t } = useSubscriptionsTranslations();

  return (
    <EmptySection
      style={style}
      description={t(
        'You have no active subscriptions. Manage expenses better by adding one now!',
      )}
      ctaTitle={t('Add New Subscription')}
      onPress={onAddPress}
    />
  );
};

export default SubscriptionsEmpty;
