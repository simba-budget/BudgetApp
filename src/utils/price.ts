import { Currency } from '@api/clients/currencies/types';

export const formatPrice = (price: number, currency: Currency): string => {
  return `${price.toFixed(2)} ${currency.symbol}`;
};

export const formatShortPrice = (price: number, currency: Currency): string => {
  return `${price.toFixed(0)} ${currency.symbol}`;
};
