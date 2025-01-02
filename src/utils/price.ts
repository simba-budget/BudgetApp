import getSymbolFromCurrency from 'currency-symbol-map';

export const formatPrice = (price: number, currency: string): string => {
  return `${price.toFixed(2)} ${getSymbolFromCurrency(currency)}`;
};

export const formatShortPrice = (price: number, currency: string): string => {
  return `${price.toFixed(0)} ${getSymbolFromCurrency(currency)}`;
};

export const formatPriceRange = (
  current: number,
  total: number,
  currency: string,
): string => {
  return `${formatShortPrice(current, currency)} / ${formatShortPrice(total, currency)}`;
};
