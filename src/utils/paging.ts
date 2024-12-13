import { Paging } from '@api/types';

export const getPaging = (page: number, limit: number = 20): Paging => {
  return { limit, offset: page * limit };
};

export const getNextPage = (fetchedCount: number, limit: number = 20) => {
  return fetchedCount / limit;
};
