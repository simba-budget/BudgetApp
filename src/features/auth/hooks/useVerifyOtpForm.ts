import { VerifyOtpRequest } from '@api/clients/auth/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const initialFormData: Pick<VerifyOtpRequest, 'otp'> = {
  otp: '',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    otp: yup.string().min(6).max(6).required(t('OTP is required')),
  });
};

const useVerifyOtpForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit } = useForm<Pick<VerifyOtpRequest, 'otp'>>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit };
};

export default useVerifyOtpForm;
