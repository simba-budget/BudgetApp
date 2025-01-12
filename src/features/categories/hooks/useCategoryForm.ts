import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveCategoryRequest } from '../types';

const initialFormData: SaveCategoryRequest = {
  name: '',
  icon: 'card',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Name is required')),
    icon: yup.string().required(t('Icon is required')),
  });
};

const useCategoryForm = () => {
  const { t } = useValidationsTranslations();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SaveCategoryRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return { control, handleSubmit, reset, isValid };
};

export default useCategoryForm;
