import { useCommonTranslations } from '@i18n/hooks';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { SingleSelect } from '../components';
import { SelectOption, SingleSelectProps } from '../components/Select';
import { debounceTime } from '../constants';
import { useCurrencies } from '../hooks';
import { mapCurrencyToOption } from '../map';

export type CurrenciesSelectProps = Omit<
  SingleSelectProps<number>,
  'options' | 'title' | 'keyword' | 'onKeywordChange'
>;

const CurrenciesSelect = (props: CurrenciesSelectProps) => {
  const { t } = useCommonTranslations();
  const [keyword, setKeyword] = useState<string>('');
  const [debouncedKeyword] = useDebounce(keyword, debounceTime);

  const { currencies, isLoading } = useCurrencies({
    filter: { keyword: debouncedKeyword },
    sort: { column: 'name', direction: 'asc' },
  });

  const options = useMemo<SelectOption<number>[]>(
    () => currencies.map(mapCurrencyToOption),
    [currencies],
  );

  return (
    <SingleSelect
      isLoading={isLoading}
      onKeywordChange={setKeyword}
      title={t('Select Currency')}
      options={options}
      {...props}
    />
  );
};

export default CurrenciesSelect;
