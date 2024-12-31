import {
  initialBalanceRoute,
  initialInvitationsRoute,
  OnboardingNavigation,
} from './types';

export const toInitialBalance = ({ navigate }: OnboardingNavigation) => {
  return navigate(initialBalanceRoute);
};

export const toInitialInvitations = ({ navigate }: OnboardingNavigation) => {
  return navigate(initialInvitationsRoute);
};
