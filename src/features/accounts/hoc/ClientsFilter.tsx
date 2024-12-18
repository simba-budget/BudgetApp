import { ClientsFilter as ClientsFilterType } from '@api/clients/clients/types';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import React, { FC } from 'react';

import { ClientsFilter as ControlledClientsFilter } from '../components';
import { selectClientsFilter } from '../selectors';
import { updateFilter } from '../slice';

const ClientsFilter: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectClientsFilter);

  const handleOnKeywordChange = (keyword: string) => {
    const newFilter: ClientsFilterType = { ...filter, keyword };
    dispatch(updateFilter({ filter: newFilter }));
  };

  return (
    <ControlledClientsFilter value={filter.keyword} onChange={handleOnKeywordChange} />
  );
};

export default ClientsFilter;
