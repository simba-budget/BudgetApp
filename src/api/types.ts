export interface DataResponse<T> {
  data: T;
}

export interface ListResponse<T> extends DataResponse<T[]> {
  total: number;
}

export interface ListRequest<
  TFilter = undefined,
  TSort extends Sort | undefined = undefined,
> {
  paging?: Paging;
  filter?: TFilter;
  sort?: TSort;
}

export interface Paging {
  limit: number;
  offset: number;
}

export interface Sort<T = string> {
  direction: 'asc' | 'desc';
  column: T;
}

export interface BaseModel {
  id: number;
}

export interface Translation {
  locale: Locale;
}

export type Locale = 'EN';
