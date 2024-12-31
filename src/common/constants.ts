import { Paging } from '@api/types';
import { Insets } from 'react-native';

export const scrollIndicatorInsets: Insets = { right: 1 };
export const debounceTime = 300;
export const defaultCurrency = 'EUR';

export const defaultLimit = 20;
export const defaultPaging: Paging = { limit: defaultLimit, offset: 0 };
