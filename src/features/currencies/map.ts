import { Currency } from '@api/clients/currencies/types';
import { SelectOption } from '@common/components/Select';
import { API_URL } from '@env';

export const mapCurrencyToOption = (currency: Currency): SelectOption<number> => ({
  key: currency.id.toString(),
  value: currency.id,
  label: `${currency.name} (${currency.symbol})`,
  avatarUrl: `${API_URL}/${currency.logoUrl}`,
});
