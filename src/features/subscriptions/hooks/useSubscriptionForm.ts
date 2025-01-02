import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveSubscriptionRequest } from '../types';

const initialFormData: SaveSubscriptionRequest = {
  name: '',
  day: 15,
  amount: 0,
  currency: 'EUR',
  merchantId: 0,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    amount: yup.number().required(t('Amount is required')),
    currency: yup.string().required(t('Currency is required')),
    name: yup.string().required(t('Name is required')),
    day: yup.number().required(t('Day is required')),
    merchantId: yup.number().required('Merchant is required'),
  });
};

const useSubscriptionForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveSubscriptionRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useSubscriptionForm;
