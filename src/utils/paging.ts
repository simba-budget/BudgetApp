import { ListResponse, Paging } from '@api/types';
import { defaultLimit } from '@common/constants';
import { InfiniteData } from '@tanstack/react-query';

export const getPaging = (page: number, limit = defaultLimit): Paging => {
  return { limit, offset: page * limit };
};

export const getNextPage = (fetchedCount: number, limit = defaultLimit) => {
  return fetchedCount / limit;
};

export const parseData = <T>(data?: InfiniteData<ListResponse<T>>) => {
  const pages = data?.pages ?? [];
  const items = pages.map((page) => page.data).flat();
  const total = pages.length > 0 ? pages[pages.length - 1].total : 0;
  return { items, total };
};

export const getNextPageParam = <T>(
  lastPage: ListResponse<T>,
  allPages: ListResponse<T>[],
) => {
  const total = lastPage.total;
  const fetched = allPages.map((page) => page.data).flat().length;
  return fetched >= total ? null : getNextPage(fetched, 20);
};
