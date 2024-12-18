import { MainParamsList } from '@navigation/MainNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';

import { ClientForm } from '../components';
import { useAddClient, useClientForm } from '../hooks';

const AddClient: FC = () => {
  const { goBack } = useNavigation<StackNavigationProp<MainParamsList>>();
  const { handleSubmit, control } = useClientForm();
  const { addClient, isSubmitting } = useAddClient({ onSuccess: goBack });

  return (
    <ClientForm
      onCancel={goBack}
      onSubmit={handleSubmit(addClient)}
      isSubmitting={isSubmitting}
      control={control}
    />
  );
};

export default AddClient;
