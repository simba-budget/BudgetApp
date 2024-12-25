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

export type AccountRoute = 'Account';
export const accountRoute: AccountRoute = 'Account';
export type AccountNavigation = BottomTabNavigationProp<AccountParamsList>;

export type ContributionsRoute = 'Contributions';
export const contributionsRoute: ContributionsRoute = 'Contributions';

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
