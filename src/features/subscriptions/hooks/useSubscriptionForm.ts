import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { getCurrentDate } from '@utils/date';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveSubscriptionRequest } from '../types';

const initialFormData: Partial<SaveSubscriptionRequest> = {
  name: '',
  startedAt: getCurrentDate(),
  amount: 0,
  merchantId: null,
  frequency: 'MONTHLY',
  description: null,
  categoryId: null,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    amount: yup.number().required(t('Amount is required')),
    currencyId: yup.number().required(t('Currency is required')),
    name: yup.string().required(t('Name is required')),
    startedAt: yup.string().required(t('Started at is required')),
    merchantId: yup.number().nullable().defined(),
    categoryId: yup.number().nullable().defined(),
    description: yup.string().nullable().defined(),
    frequency: yup
      .string()
      .oneOf(['MONTHLY', 'ANNUALLY'], t('Frequency is invalid'))
      .required(t('Frequency is required')),
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
