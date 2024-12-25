import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { getCurrentDate } from '@utils/date';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveGoalRequest } from '../types';

const initialFormData: SaveGoalRequest = {
  name: '',
  description: null,
  initialAmount: 0,
  targetAmount: 0,
  currency: 'EUR',
  startedAt: getCurrentDate(),
  endAt: null,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Name is required')),
    description: yup.string().nullable().defined(),
    currency: yup.string().required(t('Currency is required')),
    startedAt: yup.string().required(t('Started at is required')),
    endAt: yup.string().nullable().defined(),
    initialAmount: yup.number().required(t('Initial amount is required')),
    targetAmount: yup.number().required(t('Target amount is required')),
  });
};

const useGoalForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveGoalRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useGoalForm;
