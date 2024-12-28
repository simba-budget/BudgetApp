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

export interface LoggedUser {
  id: number;
  email: string;
  token: string;
  refreshToken: string;
  isOnboarded: boolean;
}
