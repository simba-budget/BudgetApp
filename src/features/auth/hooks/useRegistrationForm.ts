import { RegisterRequest } from '@api/clients/auth/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const initialFormData: RegisterRequest = {
  email: '',
  firstName: '',
  lastName: '',
  isAgreementChecked: false,
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    email: yup.string().email('Email is invalid').required(t('Email is required')),
    firstName: yup.string().required(t('First name is required')),
    lastName: yup.string().required(t('Last name is required')),
    isAgreementChecked: yup
      .boolean()
      .required(t('Must agree with terms and conditions'))
      .oneOf([true], t('Must agree with terms and conditions')),
  });
};

const useRegistrationForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit } = useForm<RegisterRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit };
};

export default useRegistrationForm;
