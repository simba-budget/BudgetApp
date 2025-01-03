import { reducer as accountsReducer } from '@features/accounts/slice';
import { reducer as authReducer } from '@features/auth/slice';
import { reducer as categoriesReducer } from '@features/categories/slice';
import { reducer as contributionsReducer } from '@features/contributions/slice';
import { reducer as goalsReducer } from '@features/goals/slice';
import { reducer as invitationsReducer } from '@features/invitations/slice';
import { reducer as membersReducer } from '@features/members/slice';
import { reducer as merchantsReducer } from '@features/merchants/slice';
import { reducer as notificationsReducer } from '@features/notifications/slice';
import { reducer as onboardingReducer } from '@features/onboarding/slice';
import { reducer as profileReducer } from '@features/profile/slice';
import { reducer as subscriptionsReducer } from '@features/subscriptions/slice';
import { reducer as tagsReducer } from '@features/tags/slice';
import { reducer as transactionsReducer } from '@features/transactions/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  accounts: accountsReducer,
  categories: categoriesReducer,
  transactions: transactionsReducer,
  goals: goalsReducer,
  invitations: invitationsReducer,
  contributions: contributionsReducer,
  members: membersReducer,
  tags: tagsReducer,
  subscriptions: subscriptionsReducer,
  onboarding: onboardingReducer,
  profile: profileReducer,
  merchants: merchantsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
