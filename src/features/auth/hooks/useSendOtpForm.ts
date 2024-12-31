import { SendOtpRequest } from '@api/clients/auth/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const initialFormData: SendOtpRequest = {
  email: '',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    email: yup
      .string()
      .email(t('Email is invalid'))
      .required(t('Email is required')),
  });
};

const useSendOtpForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit } = useForm<SendOtpRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit };
};

export default useSendOtpForm;
