import { IconButton, View } from '@common/components';
import React, { FC } from 'react';

export interface ClientsHeaderRightProps {
  onAddPress: () => void;
}

const ClientsHeaderRight: FC<ClientsHeaderRightProps> = (props) => {
  const { onAddPress } = props;

  return (
    <View direction="row" align="center" gap="xs">
      <IconButton
        onPress={onAddPress}
        variant="primary"
        size="small"
        iconName="userAdd"
      />
    </View>
  );
};

export default ClientsHeaderRight;
