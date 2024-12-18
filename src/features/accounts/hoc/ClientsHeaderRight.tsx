import { navigateToAddClient } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';

import { ClientsHeaderRight as ControlledClientsHeaderRight } from '../components';

const ClientsHeaderRight: FC = () => {
  const navigation = useNavigation<MainNavigation>();
  const handleOnAddPress = () => navigateToAddClient(navigation);

  return <ControlledClientsHeaderRight onAddPress={handleOnAddPress} />;
};

export default ClientsHeaderRight;
