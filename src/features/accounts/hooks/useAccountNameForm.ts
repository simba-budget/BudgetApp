import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { AccountNameFormData } from '../types';

const initialFormData: AccountNameFormData = {
  name: '',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Name is required')),
  });
};

const useAccountNameForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<AccountNameFormData>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useAccountNameForm;
