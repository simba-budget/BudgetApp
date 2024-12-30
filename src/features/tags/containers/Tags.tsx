import { Tag } from '@api/clients/tags/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { AccountNavigation, toTag } from '@navigation/navigators/account';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { TagsList, TagsSearch } from '../components';
import { useTags } from '../hooks';
import { selectTagsFilter } from '../selectors';
import { updateKeyword } from '../slice';

const Tags = () => {
  const navigation = useNavigation<AccountNavigation>();
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);
  const filter = useAppSelector(selectTagsFilter);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { tags, isLoading, isRefetching, refetch } = useTags({
    accountId,
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
      <TagsSearch onKeywordChange={handleOnKeywordChange} keyword={filter?.keyword} />
      <TagsList
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
