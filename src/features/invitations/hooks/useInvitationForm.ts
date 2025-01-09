import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveInvitationRequest } from '../types';

const initialFormData: SaveInvitationRequest = {
  email: '',
  role: 'MEMBER',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    email: yup.string().email(t('Email is invalid')).required(t('Name is required')),
    role: yup
      .string()
      .oneOf(['MEMBER', 'OWNER'], t('Role is required'))
      .required(t('Role is required')),
  });
};

const useInvitationForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveInvitationRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  return { control, handleSubmit, reset };
};

export default useInvitationForm;
