import React, { FC } from 'react';

import ClientsFilter from './ClientsFilter';
import ClientsList from './ClientsList';

const Clients: FC = () => (
  <>
    <ClientsFilter />
    <ClientsList />
  </>
);

export default Clients;
