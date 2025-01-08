import { Merchant } from '@api/clients/merchants/types';
import { debounceTime } from '@common/constants';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { RootNavigation, toMerchant } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import { flex1 } from '@styles/common';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce';

import { MerchantsList, MerchantsSearch } from '../components';
import { useMerchantsInfinity } from '../hooks';
import { selectApiMerchantsFilter, selectMerchantsSort } from '../selectors';
import { updateKeyword } from '../slice';

const Merchants = () => {
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectApiMerchantsFilter);
  const sort = useAppSelector(selectMerchantsSort);
  const [debouncedFilter] = useDebounce(filter, debounceTime);

  const { merchants, isLoading, isRefetching, refetch, isFetchingMore, fetchMore } =
    useMerchantsInfinity({
      sort,
      filter: debouncedFilter,
    });

  const handleOnKeywordChange = useCallback(
    (keyword: string) => dispatch(updateKeyword({ keyword })),
    [dispatch],
  );

  const handleOnMerchantPress = useCallback(
    (merchant: Merchant) => toMerchant(navigation, { id: merchant.id }),
    [navigation],
  );

  return (
    <View style={flex1}>
      <MerchantsSearch
        onKeywordChange={handleOnKeywordChange}
        keyword={filter?.keyword}
      />
      <MerchantsList
        isFetchingMore={isFetchingMore}
        onFetchMore={fetchMore}
        isLoading={isLoading}
        isRefreshing={isRefetching}
        onRefresh={refetch}
        merchants={merchants}
        onMerchantPress={handleOnMerchantPress}
      />
    </View>
  );
};

export default Merchants;
