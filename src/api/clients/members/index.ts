import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { Member, MembersFilter, SaveMemberRequest } from './types';

const url = '/members';

export const getMembers = (request: ListRequest<MembersFilter>) => {
  const params = { ...request.filter };
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
