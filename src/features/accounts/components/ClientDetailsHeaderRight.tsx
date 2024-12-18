import { IconButton, View } from '@common/components';
import React, { FC } from 'react';

export interface ClientDetailsHeaderRightProps {
  onMorePress: () => void;
}

const ClientDetailsHeaderRight: FC<ClientDetailsHeaderRightProps> = (props) => {
  const { onMorePress } = props;

  return (
    <View align="center" direction="row" gap="xs">
      <IconButton onPress={onMorePress} variant="tertiary" size="small" iconName="more" />
    </View>
  );
};

export default ClientDetailsHeaderRight;
