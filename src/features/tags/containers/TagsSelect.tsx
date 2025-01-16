import { MultiSelect } from '@common/components';
import { MultiSelectProps, SelectOption } from '@common/components/Select';
import { debounceTime } from '@common/constants';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useTagsTranslations } from '@i18n/hooks';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useTags } from '../hooks';
import { mapTagToOption } from '../map';

export type TagsSelectProps = Omit<
  MultiSelectProps<number>,
  'options' | 'title' | 'keyword' | 'onKeywordChange'
>;

const TagsSelect = (props: TagsSelectProps) => {
  const { t } = useTagsTranslations();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const [keyword, setKeyword] = useState<string>('');
  const [debouncedKeyword] = useDebounce(keyword, debounceTime);

  const { tags, isLoading } = useTags({
    filter: { accountId, keyword: debouncedKeyword },
    sort: { column: 'name', direction: 'asc' },
  });

  const options = useMemo<SelectOption<number>[]>(
    () => tags.map(mapTagToOption),
    [tags],
  );

  return (
    <MultiSelect
      isLoading={isLoading}
      onKeywordChange={setKeyword}
      title={t('Select Tags')}
      options={options}
      {...props}
    />
  );
};

export default TagsSelect;
