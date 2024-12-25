import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { getCurrentDate } from '@utils/date';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveContributionRequest } from '../types';

const initialFormData: SaveContributionRequest = {
  description: null,
  currency: 'EUR',
  amount: 0,
  date: getCurrentDate(),
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    description: yup.string().nullable().defined(),
    currency: yup.string().required(t('Currency is required')),
    date: yup.string().required(t('Date is required')),
    amount: yup.number().required(t('Amount is required')),
  });
};

const useContributionForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveContributionRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useContributionForm;
