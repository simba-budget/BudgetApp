import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

import {
  AccountParamsList,
  AuthParamsList,
  MainParamsList,
  RootParamsList,
} from './navigation';

export type RootNavigation = StackNavigationProp<RootParamsList>;

export type WelcomeRoute = 'Welcome';
export const welcomeRoute: WelcomeRoute = 'Welcome';

export type PrivacyPolicyRoute = 'PrivacyPolicy';
export const privacyPolicyRoute: PrivacyPolicyRoute = 'PrivacyPolicy';

export type TermsAndConditionsRoute = 'TermsAndConditions';
export const termsAndConditionsRoute: TermsAndConditionsRoute = 'TermsAndConditions';

export type AuthRoute = 'Auth';
export const authRoute: AuthRoute = 'Auth';
export type AuthNavigation = StackNavigationProp<AuthParamsList>;

export type SendOtpRoute = 'SendOtp';
export const sendOtpRoute: SendOtpRoute = 'SendOtp';

export type VerifyOtpRoute = 'VerifyOtp';
export const verifyOtpRoute: VerifyOtpRoute = 'VerifyOtp';
export type VerifyOtpScreenProps = StackScreenProps<AuthParamsList, VerifyOtpRoute>;

export type RegistrationRoute = 'Registration';
export const registrationRoute: RegistrationRoute = 'Registration';

export type MainRoute = 'Main';
export const mainRoute: MainRoute = 'Main';
export type MainNavigation = StackNavigationProp<MainParamsList>;

export type OpenBankingRoute = 'OpenBanking';
export const openBankingRoute: OpenBankingRoute = 'OpenBanking';

export type AccountsRoute = 'Accounts';
export const accountsRoute: AccountsRoute = 'Accounts';

export type AccountAddRoute = 'AccountAdd';
export const accountAddRoute: AccountAddRoute = 'AccountAdd';

export type AccountNameRoute = 'AccountName';
export const accountNameRoute: AccountNameRoute = 'AccountName';

export type AccountBalanceRoute = 'AccountBalance';
export const accountBalanceRoute: AccountBalanceRoute = 'AccountBalance';
export type AccountBalanceScreenProps = StackScreenProps<MainParamsList, AccountBalanceRoute>;

export type AccountEditRoute = 'AccountEdit';
export const accountEditRoute: AccountEditRoute = 'AccountEdit';
export type AccountEditScreenProps = StackScreenProps<MainParamsList, AccountEditRoute>;

export type AccountRoute = 'Account';
export const accountRoute: AccountRoute = 'Account';
export type AccountNavigation = BottomTabNavigationProp<AccountParamsList>;

export type ContributionAddRoute = 'ContributionAdd';
export const contributionAddRoute: ContributionAddRoute = 'ContributionAdd';
export type ContributionAddScreenProps = StackScreenProps<
  AccountParamsList,
  ContributionAddRoute
>;

export type ContributionEditRoute = 'ContributionEdit';
export const contributionEditRoute: ContributionEditRoute = 'ContributionEdit';
export type ContributionEditScreenProps = StackScreenProps<
  AccountParamsList,
  ContributionEditRoute
>;

export type ContributionRoute = 'Contribution';
export const contributionRoute: ContributionRoute = 'Contribution';
export type ContributionScreenProps = StackScreenProps<AccountParamsList, ContributionRoute>;

export type ContributionsRoute = 'Contributions';
export const contributionsRoute: ContributionsRoute = 'Contributions';
export type ContributionsScreenProps = StackScreenProps<AccountParamsList, ContributionsRoute>;

export type GoalAddRoute = 'GoalAdd';
export const goalAddRoute: GoalAddRoute = 'GoalAdd';

export type GoalEditRoute = 'GoalEdit';
export const goalEditRoute: GoalEditRoute = 'GoalEdit';
export type GoalEditScreenProps = StackScreenProps<AccountParamsList, GoalEditRoute>;

export type GoalRoute = 'Goal';
export const goalRoute: GoalRoute = 'Goal';
export type GoalScreenProps = StackScreenProps<AccountParamsList, GoalRoute>;

export type CategoryAddRoute = 'CategoryAdd';
export const categoryAddRoute: CategoryAddRoute = 'CategoryAdd';

export type CategoryEditRoute = 'CategoryEdit';
export const categoryEditRoute: CategoryEditRoute = 'CategoryEdit';
export type CategoryEditScreenProps = StackScreenProps<AccountParamsList, CategoryEditRoute>;

export type CategoryRoute = 'Category';
export const categoryRoute: CategoryRoute = 'Category';
export type CategoryScreenProps = StackScreenProps<AccountParamsList, CategoryRoute>;

export type TransactionAddRoute = 'TransactionAdd';
export const transactionAddRoute: TransactionAddRoute = 'TransactionAdd';

export type TransactionEditRoute = 'TransactionEdit';
export const transactionEditRoute: TransactionEditRoute = 'TransactionEdit';
export type TransactionEditScreenProps = StackScreenProps<
  AccountParamsList,
  TransactionEditRoute
>;

export type TransactionRoute = 'Transaction';
export const transactionRoute: TransactionRoute = 'Transaction';
export type TransactionScreenProps = StackScreenProps<AccountParamsList, TransactionRoute>;

export type InvitationAddRoute = 'InvitationAdd';
export const invitationAddRoute: InvitationAddRoute = 'InvitationAdd';

export type InvitationRoute = 'Invitation';
export const invitationRoute: InvitationRoute = 'Invitation';
export type InvitationScreenProps = StackScreenProps<AccountParamsList, InvitationRoute>;

export type ProfileRoute = 'Profile';
export const profileRoute: ProfileRoute = 'Profile';

export type MemberRoute = 'Member';
export const memberRoute: MemberRoute = 'Member';
export type MemberScreenProps = StackScreenProps<AccountParamsList, MemberRoute>;

export type MemberEditRoute = 'MemberEdit';
export const memberEditRoute: MemberEditRoute = 'MemberEdit';
export type MemberEditScreenProps = StackScreenProps<AccountParamsList, MemberEditRoute>;

export type BottomTabsRoute = 'BottomTabs';
export const bottomTabsRoute: BottomTabsRoute = 'BottomTabs';
export type BottomTabsNavigation = BottomTabNavigationProp<AuthParamsList>;

export type HomeRoute = 'Home';
export const homeRoute: HomeRoute = 'Home';

export type TransactionsRoute = 'Transactions';
export const transactionsRoute: TransactionsRoute = 'Transactions';

export type CategoriesRoute = 'Categories';
export const categoriesRoute: CategoriesRoute = 'Categories';

export type GoalsRoute = 'Goals';
export const goalsRoute: GoalsRoute = 'Goals';

export type InvitationsRoute = 'Invitations';
export const invitationsRoute: InvitationsRoute = 'Invitations';

export type MembersRoute = 'Members';
export const membersRoute: MembersRoute = 'Members';
