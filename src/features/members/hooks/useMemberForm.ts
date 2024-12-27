import { yupResolver } from '@hookform/resolvers/yup';
import { useValidationsTranslations } from '@i18n/hooks';
import { TFunction } from 'i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { SaveMemberRequest } from '../types';

const initialFormData: SaveMemberRequest = {
  role: 'MEMBER',
};

const getSchema = (t: TFunction) => {
  return yup.object().shape({
    role: yup
      .string()
      .oneOf(['MEMBER', 'OWNER'], t('Role is required'))
      .required(t('Role is required')),
  });
};

const useMemberForm = () => {
  const { t } = useValidationsTranslations();

  const { control, handleSubmit, reset } = useForm<SaveMemberRequest>({
    defaultValues: initialFormData,
    resolver: yupResolver(getSchema(t)),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  return { control, handleSubmit, reset };
};

export default useMemberForm;
