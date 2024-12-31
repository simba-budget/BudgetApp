import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { ListMembersRequest, Member, SaveMemberRequest } from './types';

const url = '/members';

export const getMembers = (request: ListMembersRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Member>>(url, { params });
};

export const getMember = (id: number) => {
  return httpClient.get<void, DataResponse<Member>>(`${url}/${id}`);
};

export const editMember = (id: number, request: SaveMemberRequest) => {
  return httpClient.put<void, DataResponse<Member>>(`${url}/${id}`, request);
};

export const deleteMember = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
