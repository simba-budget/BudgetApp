import { SingleSelect } from '@common/components';
import { SelectOption, SingleSelectProps } from '@common/components/Select';
import { debounceTime } from '@common/constants';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useSubscriptionsTranslations } from '@i18n/hooks';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useSubscriptions } from '../hooks';
import { mapSubscriptionToOption } from '../map';

export type SubscriptionsSelectProps = Omit<
  SingleSelectProps<number>,
  'options' | 'title' | 'keyword' | 'onKeywordChange' | 'iconName'
>;

const SubscriptionsSelect = (props: SubscriptionsSelectProps) => {
  const { t } = useSubscriptionsTranslations();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const [keyword, setKeyword] = useState<string>('');
  const [debouncedKeyword] = useDebounce(keyword, debounceTime);

  const { subscriptions, isLoading } = useSubscriptions({
    filter: { accountId, keyword: debouncedKeyword },
    sort: { column: 'name', direction: 'asc' },
  });

  const options = useMemo<SelectOption<number>[]>(
    () => subscriptions.map(mapSubscriptionToOption),
    [subscriptions],
  );

  return (
    <SingleSelect
      iconName="card"
      isLoading={isLoading}
      onKeywordChange={setKeyword}
      title={t('Select Subscription')}
      options={options}
      {...props}
    />
  );
};

export default SubscriptionsSelect;
