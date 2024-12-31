import {
  privacyPolicyRoute,
  RootNavigation,
  termsAndConditionsRoute,
} from './types';

export const toPrivacyPolicy = ({ navigate }: RootNavigation) => {
  return navigate(privacyPolicyRoute);
};

export const toTermsAndConditions = ({ navigate }: RootNavigation) => {
  return navigate(termsAndConditionsRoute);
};
