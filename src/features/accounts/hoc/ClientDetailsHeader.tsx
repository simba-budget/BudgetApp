import React, { FC } from 'react';

import { ClientDetailsHeader as ControlledClientDetailsHeader } from '../components';
import { useClient } from '../hooks';

export interface ClientDetailsHeaderProps {
  id: number;
}

const ClientDetailsHeader: FC<ClientDetailsHeaderProps> = (props) => {
  const { id } = props;
  const { client, isLoading } = useClient(id);

  return <ControlledClientDetailsHeader isLoading={isLoading} client={client} />;
};

export default ClientDetailsHeader;
