// Groups
// ---------------------------------------------------------------------------------
export type AuthRoute = 'Auth';
export const authRoute: AuthRoute = 'Auth';

export type PublicRoute = 'Public';
export const publicRoute: PublicRoute = 'Public';

export type ProtectedRoute = 'Protected';
export const protectedRoute: ProtectedRoute = 'Protected';

export type AccountRoute = 'Account';
export const accountRoute: AccountRoute = 'Account';

export type BottomSheetRoute = 'BottomSheet';
export const bottomSheetRoute: BottomSheetRoute = 'BottomSheet';

// Public
// ---------------------------------------------------------------------------------
export type PrivacyPolicyRoute = 'PrivacyPolicy';
export const privacyPolicyRoute: PrivacyPolicyRoute = 'PrivacyPolicy';

export type TermsAndConditionsRoute = 'TermsAndConditions';
export const termsAndConditionsRoute: TermsAndConditionsRoute = 'TermsAndConditions';

// Auth
// ---------------------------------------------------------------------------------
export type WelcomeRoute = 'Welcome';
export const welcomeRoute: WelcomeRoute = 'Welcome';

export type SendOtpRoute = 'SendOtp';
export const sendOtpRoute: SendOtpRoute = 'SendOtp';

export type VerifyOtpRoute = 'VerifyOtp';
export const verifyOtpRoute: VerifyOtpRoute = 'VerifyOtp';

export type RegistrationRoute = 'Registration';
export const registrationRoute: RegistrationRoute = 'Registration';

// Protected
// ---------------------------------------------------------------------------------
export type AccountsLoadingRoute = 'AccountsLoading';
export const accountsLoadingRoute: AccountsLoadingRoute = 'AccountsLoading';

export type AccountAddRoute = 'AccountAdd';
export const accountAddRoute: AccountAddRoute = 'AccountAdd';

export type NotificationsRoute = 'Notifications';
export const notificationsRoute: NotificationsRoute = 'Notifications';

export type AccountEditRoute = 'AccountEdit';
export const accountEditRoute: AccountEditRoute = 'AccountEdit';

// Account
// ---------------------------------------------------------------------------------
export type ContributionsRoute = 'Contributions';
export const contributionsRoute: ContributionsRoute = 'Contributions';

export type ContributionAddRoute = 'ContributionAdd';
export const contributionAddRoute: ContributionAddRoute = 'ContributionAdd';

export type ContributionEditRoute = 'ContributionEdit';
export const contributionEditRoute: ContributionEditRoute = 'ContributionEdit';

export type ContributionRoute = 'Contribution';
export const contributionRoute: ContributionRoute = 'Contribution';

export type GoalAddRoute = 'GoalAdd';
export const goalAddRoute: GoalAddRoute = 'GoalAdd';

export type CategoriesRoute = 'Categories';
export const categoriesRoute: CategoriesRoute = 'Categories';

export type CategoryAddRoute = 'CategoryAdd';
export const categoryAddRoute: CategoryAddRoute = 'CategoryAdd';

export type CategoryEditRoute = 'CategoryEdit';
export const categoryEditRoute: CategoryEditRoute = 'CategoryEdit';

export type CategoryRoute = 'Category';
export const categoryRoute: CategoryRoute = 'Category';

export type TransactionRoute = 'Transaction';
export const transactionRoute: TransactionRoute = 'Transaction';

export type TransactionAddRoute = 'TransactionAdd';
export const transactionAddRoute: TransactionAddRoute = 'TransactionAdd';

export type TransactionEditRoute = 'TransactionEdit';
export const transactionEditRoute: TransactionEditRoute = 'TransactionEdit';

export type InvitationsRoute = 'Invitations';
export const invitationsRoute: InvitationsRoute = 'Invitations';

export type InvitationAddRoute = 'InvitationAdd';
export const invitationAddRoute: InvitationAddRoute = 'InvitationAdd';

export type InvitationRoute = 'Invitation';
export const invitationRoute: InvitationRoute = 'Invitation';

export type TagsRoute = 'Tags';
export const tagsRoute: TagsRoute = 'Tags';

export type TagAddRoute = 'TagAdd';
export const tagAddRoute: TagAddRoute = 'TagAdd';

export type TagEditRoute = 'TagEdit';
export const tagEditRoute: TagEditRoute = 'TagEdit';

export type TagRoute = 'Tag';
export const tagRoute: TagRoute = 'Tag';

export type MemberRoute = 'Member';
export const memberRoute: MemberRoute = 'Member';

export type MemberEditRoute = 'MemberEdit';
export const memberEditRoute: MemberEditRoute = 'MemberEdit';

export type SubscriptionAddRoute = 'SubscriptionAdd';
export const subscriptionAddRoute: SubscriptionAddRoute = 'SubscriptionAdd';

export type SubscriptionEditRoute = 'SubscriptionEdit';
export const subscriptionEditRoute: SubscriptionEditRoute = 'SubscriptionEdit';

export type SubscriptionRoute = 'Subscription';
export const subscriptionRoute: SubscriptionRoute = 'Subscription';

export type MerchantsRoute = 'Merchants';
export const merchantsRoute: MerchantsRoute = 'Merchants';

export type MerchantAddRoute = 'MerchantAdd';
export const merchantAddRoute: MerchantAddRoute = 'MerchantAdd';

export type MerchantEditRoute = 'MerchantEdit';
export const merchantEditRoute: MerchantEditRoute = 'MerchantEdit';

export type MerchantRoute = 'Merchant';
export const merchantRoute: MerchantRoute = 'Merchant';

export type ExternalAccountsRoute = 'ExternalAccounts';
export const externalAccountsRoute: ExternalAccountsRoute = 'ExternalAccounts';

export type ExternalAccountRoute = 'ExternalAccount';
export const externalAccountRoute: ExternalAccountRoute = 'ExternalAccount';

export type OpenBankingRoute = 'OpenBanking';
export const openBankingRoute: OpenBankingRoute = 'OpenBanking';

// Bottom Sheet
// ---------------------------------------------------------------------------------
// accounts
export type AccountSelectRoute = 'AccountSelect';
export const accountSelectRoute: AccountSelectRoute = 'AccountSelect';

// categories
export type CategoryActionsRoute = 'CategoryActions';
export const categoryActionsRoute: CategoryActionsRoute = 'CategoryActions';

export type CategoryDeleteRoute = 'CategoryDelete';
export const categoryDeleteRoute: CategoryDeleteRoute = 'CategoryDelete';

// tags
export type TagActionsRoute = 'TagActions';
export const tagActionsRoute: TagActionsRoute = 'TagActions';

export type TagDeleteRoute = 'TagDelete';
export const tagDeleteRoute: TagDeleteRoute = 'TagDelete';

// transactions
export type TransactionDeleteRoute = 'TransactionDelete';
export const transactionDeleteRoute: TransactionDeleteRoute = 'TransactionDelete';

export type TransactionActionsRoute = 'TransactionActions';
export const transactionActionsRoute: TransactionActionsRoute = 'TransactionActions';

// subscriptions
export type SubscriptionDeleteRoute = 'SubscriptionDelete';
export const subscriptionDeleteRoute: SubscriptionDeleteRoute = 'SubscriptionDelete';

export type SubscriptionActionsRoute = 'SubscriptionActions';
export const subscriptionActionsRoute: SubscriptionActionsRoute =
  'SubscriptionActions';

// goals
export type GoalEditRoute = 'GoalEdit';
export const goalEditRoute: GoalEditRoute = 'GoalEdit';

export type GoalRoute = 'Goal';
export const goalRoute: GoalRoute = 'Goal';

export type GoalActionsRoute = 'GoalActions';
export const goalActionsRoute: GoalActionsRoute = 'GoalActions';

export type GoalDeleteRoute = 'GoalDelete';
export const goalDeleteRoute: GoalDeleteRoute = 'GoalDelete';

// members
export type MembersRoute = 'Members';
export const membersRoute: MembersRoute = 'Members';

export type MembersAndInvitationsRoute = 'MembersAndInvitations';
export const membersAndInvitationsRoute: MembersAndInvitationsRoute =
  'MembersAndInvitations';
