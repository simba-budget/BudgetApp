import { Picker } from '@common/components';
import { PickerOption } from '@common/components/Picker';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedClientId } from '@features/clients/selectors';
import { setClientToDeleteId, setSelectedClientId } from '@features/clients/slice';
import { useClientsTranslations } from '@i18n/hooks';
import { navigateToClientDetails, navigateToEditClient } from '@navigation/actions';
import { MainNavigation } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useMemo } from 'react';

import { ClientOptionKey } from '../types';

const ClientsOptions: FC = () => {
  const dispatch = useAppDispatch();
  const selectedClientId = useAppSelector(selectSelectedClientId);
  const { t } = useClientsTranslations();
  const navigation = useNavigation<MainNavigation>();

  const handleOnClose = useCallback(() => {
    dispatch(setSelectedClientId({ id: null }));
  }, [dispatch]);

  const handleOnViewPress = useCallback(() => {
    if (!selectedClientId) return;
    navigateToClientDetails(navigation, { id: selectedClientId });
  }, [navigation, selectedClientId]);

  const handleOnEditPress = useCallback(() => {
    if (!selectedClientId) return;
    navigateToEditClient(navigation, { id: selectedClientId });
  }, [navigation, selectedClientId]);

  const handleOnDeletePress = useCallback(() => {
    if (!selectedClientId) return;
    dispatch(setClientToDeleteId({ id: selectedClientId }));
  }, [selectedClientId, dispatch]);

  const options = useMemo<PickerOption<ClientOptionKey>[]>(
    () => [
      {
        label: t('View'),
        iconName: 'eye',
        key: 'view',
        onPress: handleOnViewPress,
      },
      {
        label: t('Edit'),
        iconName: 'edit',
        key: 'edit',
        onPress: handleOnEditPress,
      },
      {
        label: t('Delete'),
        iconName: 'delete',
        key: 'delete',
        color: 'error',
        onPress: handleOnDeletePress,
      },
    ],
    [t, handleOnViewPress, handleOnEditPress, handleOnDeletePress],
  );

  return (
    <Picker<ClientOptionKey>
      options={options}
      onClose={handleOnClose}
      isOpen={!!selectedClientId}
    />
  );
};

export default ClientsOptions;
