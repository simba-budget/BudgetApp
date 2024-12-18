import { Confirmation } from '@common/components';
import { useAppSelector } from '@core/store/store';
import { selectClientToDeleteId } from '@features/clients/selectors';
import { setClientToDeleteId } from '@features/clients/slice';
import { useClientsTranslations } from '@i18n/hooks';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useDeleteClient } from '../hooks';

const DeleteClient: FC = () => {
  const clientToDeleteId = useAppSelector(selectClientToDeleteId);
  const dispatch = useDispatch();
  const { t } = useClientsTranslations();

  const onSuccess = useCallback(
    () => dispatch(setClientToDeleteId({ id: null })),
    [dispatch],
  );

  const { deleteClient, isSubmitting } = useDeleteClient({ onSuccess });

  const handleOnConfirm = useCallback(() => {
    if (!clientToDeleteId) return;
    return deleteClient(clientToDeleteId);
  }, [clientToDeleteId, deleteClient]);

  return (
    <Confirmation
      type="danger"
      onClose={onSuccess}
      isOpen={!!clientToDeleteId}
      isSubmitting={isSubmitting}
      title={t('Are you sure that you want to delete this client?')}
      onConfirm={handleOnConfirm}
      confirmText={t('Delete')}
      description={t(
        'Deleting this client will delete all related info as invoices and payments',
      )}
    />
  );
};

export default DeleteClient;
