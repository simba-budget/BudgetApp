import { SaveTransactionRequest } from '@api/clients/transactions/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { getCurrentDate } from '@utils/date';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const initialFormData: Partial<SaveTransactionRequest> = {
  amount: 0,
  currency: 'EUR',
  description: null,
  date: getCurrentDate(),
  subscriptionId: null,
  merchantId: null,
  categoryId: null,
  tagsIds: null,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    amount: yup.number().required(t('Amount is required')),
    currency: yup.string().required(t('Currency is required')),
    description: yup.string().nullable().defined(),
    categoryId: yup.number().nullable().defined(),
    subscriptionId: yup.number().nullable().defined(),
    merchantId: yup.number().nullable().defined(),
    date: yup.string().required(t('Date is required')),
    tagsIds: yup.array().of(yup.number().integer().required()).nullable().defined(),
  });
};

const useTransactionForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveTransactionRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useTransactionForm;
