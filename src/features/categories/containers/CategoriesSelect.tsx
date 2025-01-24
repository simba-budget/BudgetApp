import { SingleSelect } from '@common/components';
import { SelectOption, SingleSelectProps } from '@common/components/Select';
import { debounceTime } from '@common/constants';
import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useCategories } from '@features/categories/hooks';
import { mapCategoryToOption } from '@features/categories/map';
import { useCategoriesTranslations } from '@i18n/hooks';
import React, { useMemo, useState } from 'react';
import { useDebounce } from 'use-debounce';

export type CategoriesSelectProps = Omit<
  SingleSelectProps<number>,
  'options' | 'title' | 'keyword' | 'onKeywordChange' | 'iconName'
>;

const CategoriesSelect = (props: CategoriesSelectProps) => {
  const { t } = useCategoriesTranslations();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const [keyword, setKeyword] = useState<string>('');
  const [debouncedKeyword] = useDebounce(keyword, debounceTime);

  const { categories, isLoading } = useCategories({
    filter: { accountId, keyword: debouncedKeyword },
    sort: { column: 'name', direction: 'asc' },
  });

  const options = useMemo<SelectOption<number>[]>(
    () => categories.map(mapCategoryToOption),
    [categories],
  );

  return (
    <SingleSelect
      iconName="squares"
      isLoading={isLoading}
      onKeywordChange={setKeyword}
      title={t('Select Category')}
      options={options}
      {...props}
    />
  );
};

export default CategoriesSelect;
