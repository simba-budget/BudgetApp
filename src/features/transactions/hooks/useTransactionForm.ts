import { useAppSelector } from '@core/store/store';
import { selectSelectedAccount } from '@features/accounts/selectors';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { getCurrentFormDate } from '@utils/date';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveTransactionRequest } from '../types';

const initialFormData: Partial<SaveTransactionRequest> = {
  description: null,
  date: getCurrentFormDate(),
  categoryId: null,
  subscriptionId: null,
  merchantId: null,
  tagsIds: null,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    amount: yup.number().required(t('Amount is required')),
    currencyId: yup.number().required('Currency is required'),
    description: yup.string().nullable().defined(),
    categoryId: yup.number().nullable().defined(),
    merchantId: yup.number().nullable().defined(),
    subscriptionId: yup.number().nullable().defined(),
    date: yup.string().required(t('Date is required')),
    tagsIds: yup.array().of(yup.number().integer().required()).nullable().defined(),
  });
};

const useTransactionForm = () => {
  const { t } = useValidationsTranslations();
  const account = useAppSelector(selectSelectedAccount);

  const { control, handleSubmit, reset } = useForm<SaveTransactionRequest>({
    defaultValues: { ...initialFormData, currencyId: account?.currency.id },
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useTransactionForm;
