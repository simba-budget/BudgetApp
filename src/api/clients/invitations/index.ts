import httpClient from '@api/httpClient';
import { DataResponse, ListRequest, ListResponse } from '@api/types';

import { Invitation, InvitationsFilter, SaveInvitationRequest } from './types';

const url = '/invitations';

export const getInvitations = (request: ListRequest<InvitationsFilter>) => {
  const params = { ...request.filter };
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
