import React, { FC } from 'react';

import ClientDetailsHeader from './ClientDetailsHeader';

export interface ClientDetailsProps {
  id: number;
}

const ClientDetails: FC<ClientDetailsProps> = (props) => {
  const { id } = props;
  return <ClientDetailsHeader id={id} />;
};

export default ClientDetails;
