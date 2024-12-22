export interface LinkTokenResponse {
  linkToken: string;
}

export interface CreateAccessTokenRequest {
  publicToken: string;
  institutionId: string;
}
