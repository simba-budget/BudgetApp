import { SaveClientRequest } from '@api/clients/clients/types';
import { MainParamsList } from '@navigation/MainNavigator';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useEffect } from 'react';

import { ClientForm } from '../components';
import { useClient, useClientForm, useEditClient } from '../hooks';
import { mapSaveClientRequest } from '../map';

export interface EditClientProps {
  id: number;
}

const EditClient: FC<EditClientProps> = (props) => {
  const { id } = props;
  const { goBack } = useNavigation<StackNavigationProp<MainParamsList>>();
  const { client, isLoading } = useClient(id);
  const { handleSubmit, control, reset } = useClientForm();
  const { editClient, isSubmitting } = useEditClient({ onSuccess: goBack });

  const handleOnSubmit = (request: SaveClientRequest) => {
    return editClient({ id, ...request });
  };

  useEffect(() => {
    if (client) reset(mapSaveClientRequest(client));
  }, [client, reset]);

  return (
    <ClientForm
      onCancel={goBack}
      onSubmit={handleSubmit(handleOnSubmit)}
      isSubmitting={isSubmitting}
      control={control}
      isDisabled={isLoading}
    />
  );
};

export default EditClient;
