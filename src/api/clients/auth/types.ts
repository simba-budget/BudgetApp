export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface SendOtpRequest {
  email: string;
}

export interface OtpResponse {
  expirationDate: string;
}

export interface RegisterRequest {
  email: string;
  firstName: string;
  lastName: string;
  isAgreementChecked: boolean;
}

export interface TokensResponse {
  token: string;
  refreshToken: string;
}
