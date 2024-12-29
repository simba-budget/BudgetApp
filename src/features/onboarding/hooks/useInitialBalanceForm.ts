import { useAppSelector } from '@core/store/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { selectInitialBalanceFormData } from '../selectors';
import { InitialBalanceFormData } from '../types';

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    initialBalance: yup.number().required(t('Initial budget is required')),
    currency: yup.string().required(t('Currency is required')),
  });
};

const useAccountForm = () => {
  const { t } = useValidationsTranslations();
  const formData = useAppSelector(selectInitialBalanceFormData);

  const { control, handleSubmit, reset } = useForm<InitialBalanceFormData>({
    defaultValues: formData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useAccountForm;
