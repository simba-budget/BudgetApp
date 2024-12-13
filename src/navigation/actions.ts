import { AuthParamsList } from '@navigation/navigation';

import {
  AuthNavigation,
  privacyPolicyRoute,
  registrationRoute,
  RootNavigation,
  sendOtpRoute,
  termsAndConditionsRoute,
  verifyOtpRoute,
  VerifyOtpRoute,
} from './types';

export const toSendOtp = ({ navigate }: AuthNavigation) => {
  return navigate(sendOtpRoute);
};

export const toRegistration = ({ navigate }: AuthNavigation) => {
  return navigate(registrationRoute);
};

export const toVerifyOtp = (
  { navigate }: AuthNavigation,
  params: AuthParamsList[VerifyOtpRoute],
) => {
  return navigate(verifyOtpRoute, params);
};

export const toPrivacyPolicy = ({ navigate }: RootNavigation) => {
  return navigate(privacyPolicyRoute);
};

export const toTermsAndConditions = ({ navigate }: RootNavigation) => {
  return navigate(termsAndConditionsRoute);
};
