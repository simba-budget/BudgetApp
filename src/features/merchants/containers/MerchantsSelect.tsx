import { SingleSelect } from '@common/components';
import { SelectOption, SingleSelectProps } from '@common/components/Select';
import { debounceTime } from '@common/constants';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useMerchantsTranslations } from '@i18n/hooks';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useMerchants } from '../hooks';
import { mapMerchantToOption } from '../map';

export type MerchantsSelectProps = Omit<
  SingleSelectProps<number>,
  'options' | 'title' | 'keyword' | 'onKeywordChange' | 'iconName'
>;

const MerchantsSelect = (props: MerchantsSelectProps) => {
  const { t } = useMerchantsTranslations();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const [keyword, setKeyword] = useState<string>('');
  const [debouncedKeyword] = useDebounce(keyword, debounceTime);

  const { merchants, isLoading } = useMerchants({
    filter: { accountId, keyword: debouncedKeyword },
    sort: { column: 'name', direction: 'asc' },
  });

  const options = useMemo<SelectOption<number>[]>(
    () => merchants.map(mapMerchantToOption),
    [merchants],
  );

  return (
    <SingleSelect
      iconName="profile"
      isLoading={isLoading}
      onKeywordChange={setKeyword}
      title={t('Select Merchant')}
      options={options}
      {...props}
    />
  );
};

export default MerchantsSelect;
