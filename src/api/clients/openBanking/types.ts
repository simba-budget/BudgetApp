export interface LinkTokenResponse {
  linkToken: string;
}

export interface CreateInstitutionLinkRequest {
  publicToken: string;
  name: string;
  institutionId: string;
  accountsIds: string[];
}
