import { useAppDispatch } from '@core/store/store';
import { setSelectedClientId } from '@features/clients/slice';
import { MainParamsList } from '@navigation/MainNavigator';
import { ClientDetailsRoute } from '@navigation/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';

import { ClientDetailsHeaderRight as ControlledClientDetailsHeaderRight } from '../components';

const ClientDetailsHeaderRight: FC = () => {
  const dispatch = useAppDispatch();
  const route = useRoute<RouteProp<MainParamsList, ClientDetailsRoute>>();
  const id = route.params.id;

  const handleOnMorePress = useCallback(() => {
    dispatch(setSelectedClientId({ id }));
  }, [dispatch, id]);

  return <ControlledClientDetailsHeaderRight onMorePress={handleOnMorePress} />;
};

export default ClientDetailsHeaderRight;
