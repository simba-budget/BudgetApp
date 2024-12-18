import { SaveCategoryRequest } from '@api/clients/categories/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const initialFormData: SaveCategoryRequest = {
  name: '',
  initialBudget: 0,
  currency: 'EUR',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Company name is required')),
    initialBudget: yup.number().required(t('Company code is required')),
    currency: yup.string().required(t('Currency is required')),
  });
};

const useCategoryForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveCategoryRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useCategoryForm;
