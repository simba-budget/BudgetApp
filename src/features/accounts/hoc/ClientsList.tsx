import { FlatList, ListItem } from '@common/components';
import { debounceTime } from '@common/constants';
import { ListItem as ListItemType } from '@common/types';
import { useAppSelector } from '@core/store/store';
import { navigateToClientDetails } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { gap } from '@styles/lightTheme';
import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';

import { useClients } from '../hooks';
import { mapClientToListItem } from '../map';
import { selectClientsFilter } from '../selectors';
import { setSelectedClientId } from '../slice';

const ClientsList: FC = () => {
  const dispatch = useDispatch();
  const filter = useAppSelector(selectClientsFilter);
  const navigation = useNavigation<MainNavigation>();
  const [debouncedFilter] = useDebounce(filter, debounceTime);
  const { clients, isLoading } = useClients({ filter: debouncedFilter });
  const data = useMemo<ListItemType[]>(() => clients.map(mapClientToListItem), [clients]);

  const handleOnItemPress = useCallback(
    (item: ListItemType) => navigateToClientDetails(navigation, { id: item.id }),
    [navigation],
  );

  const handleOnItemLongPress = useCallback(
    (item: ListItemType) => dispatch(setSelectedClientId({ id: item.id })),
    [dispatch],
  );

  return (
    <FlatList
      contentContainerStyle={gap('row')('l')}
      isSafeBottomTab
      ItemComponent={ListItem}
      onItemPress={handleOnItemPress}
      onItemLongPress={handleOnItemLongPress}
      data={data}
      isLoading={isLoading}
    />
  );
};

export default ClientsList;
