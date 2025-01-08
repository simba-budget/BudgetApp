import { Tag } from '@api/clients/tags/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { RootNavigation, toTag } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { TagsList, TagsSearch } from '../components';
import { useTagsInfinity } from '../hooks';
import { selectApiTagsFilter, selectTagsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Tags = () => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiTagsFilter);
  const sort = useAppSelector(selectTagsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { tags, isLoading, isRefetching, refetch, isFetchingMore, fetchMore } =
    useTagsInfinity({
      sort,
      filter: debouncedFilter,
    });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnTagPress = useCallback(
    (tag: Tag) => toTag(navigation, { id: tag.id }),
    [navigation],
  );

  return (
    <View style={flex1}>
      <TagsSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <TagsList
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        tags={tags}
        onTagPress={handleOnTagPress}
      />
    </View>
  );
};

export default Tags;
