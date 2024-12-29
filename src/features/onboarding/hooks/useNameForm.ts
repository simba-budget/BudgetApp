import { useAppSelector } from '@core/store/store';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { selectNameFormData } from '../selectors';
import { NameFormData } from '../types';

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Name is required')),
  });
};

const useNameForm = () => {
  const { t } = useValidationsTranslations();
  const formData = useAppSelector(selectNameFormData);

  const { control, handleSubmit, reset } = useForm<NameFormData>({
    defaultValues: formData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useNameForm;
