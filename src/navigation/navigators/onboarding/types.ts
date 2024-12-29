import { StackNavigationProp } from '@react-navigation/stack';

export type OnboardingParamsList = {
  [nameRoute]: undefined;
  [initialBalanceRoute]: undefined;
  [initialInvitationsRoute]: undefined;
};

export type OnboardingRoute = 'Onboarding';
export const onboardingRoute: OnboardingRoute = 'Onboarding';
export type OnboardingNavigation = StackNavigationProp<OnboardingParamsList>;

export type NameRoute = 'Name';
export const nameRoute: NameRoute = 'Name';

export type InitialBalanceRoute = 'InitialBalance';
export const initialBalanceRoute: InitialBalanceRoute = 'InitialBalance';

export type InitialInvitationsRoute = 'InitialInvitations';
export const initialInvitationsRoute: InitialInvitationsRoute = 'InitialInvitations';
