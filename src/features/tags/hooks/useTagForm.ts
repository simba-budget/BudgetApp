import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveTagRequest } from '../types';

const initialFormData: SaveTagRequest = {
  name: '',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Name is required')),
  });
};

const useTagForm = () => {
  const { t } = useValidationsTranslations();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SaveTagRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset, isValid };
};

export default useTagForm;
