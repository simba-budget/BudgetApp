import {
  AuthNavigation,
  AuthParamsList,
  registrationRoute,
  sendOtpRoute,
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
