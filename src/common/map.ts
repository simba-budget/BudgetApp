import { Currency } from '@api/clients/currencies/types';

import { SelectOption } from './components/Select';

export const mapCurrencyToOption = (currency: Currency): SelectOption<number> => ({
  key: currency.id.toString(),
  value: currency.id,
  label: currency.name,
  iconName: 'card',
});
