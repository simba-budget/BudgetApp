import { SaveAccountRequest } from '@api/clients/accounts/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const initialFormData: Partial<SaveAccountRequest> = {
  name: '',
  type: 'PERSONAL',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    name: yup.string().required(t('Name is required')),
    currencyId: yup.number().required(t('Currency is required')),
    type: yup
      .string()
      .oneOf(['PERSONAL', 'BUSINESS'], t('Type is required'))
      .required(t('Type is required')),
  });
};

const useAccountForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveAccountRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useAccountForm;
