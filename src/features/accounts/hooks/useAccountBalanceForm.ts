import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { AccountBalanceFormData } from '../types';

const initialFormData: AccountBalanceFormData = {
  initialBalance: 0,
  currency: 'EUR',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    initialBalance: yup.number().required(t('Initial budget is required')),
    currency: yup.string().required(t('Currency is required')),
  });
};

const useAccountForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<AccountBalanceFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useAccountForm;
