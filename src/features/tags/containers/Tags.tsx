import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { TagsList, TagsSearch } from '../components';
import { useTags } from '../hooks';
import { selectApiTagsFilter, selectTagsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Tags = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiTagsFilter);
  const sort = useAppSelector(selectTagsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { tags, isLoading, isRefetching, refetch } = useTags({
    sort,
    filter: debouncedFilter,
  });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  return (
    <View style={flex1}>
      <TagsSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <TagsList
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        tags={tags}
      />
    </View>
  );
};

export default Tags;
