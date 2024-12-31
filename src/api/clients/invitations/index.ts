import httpClient from '@api/httpClient';
import { DataResponse, ListResponse } from '@api/types';

import { Invitation, ListInvitationsRequest, SaveInvitationRequest } from './types';

const url = '/invitations';

export const getInvitations = (request: ListInvitationsRequest) => {
  const params = { ...request.filter, ...request.sort, ...request.paging };
  return httpClient.get<void, ListResponse<Invitation>>(url, { params });
};

export const getInvitation = (id: number) => {
  return httpClient.get<void, DataResponse<Invitation>>(`${url}/${id}`);
};

export const addInvitation = (request: SaveInvitationRequest) => {
  return httpClient.post<void, DataResponse<Invitation>>(url, request);
};

export const deleteInvitation = (id: number) => {
  return httpClient.delete(`${url}/${id}`);
};
