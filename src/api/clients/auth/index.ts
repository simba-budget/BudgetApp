import httpClient from '@api/httpClient';

import {
  OtpResponse,
  RegisterRequest,
  SendOtpRequest,
  TokensResponse,
  VerifyOtpRequest,
} from './types';

const url = '/auth';

export const sendOtp = (request: SendOtpRequest) => {
  return httpClient.post<void, OtpResponse>(`${url}/send-otp`, request);
};

export const verifyOtp = (request: VerifyOtpRequest) => {
  return httpClient.post<void, TokensResponse>(`${url}/verify-otp`, request);
};

export const register = (request: RegisterRequest) => {
  return httpClient.post<void, OtpResponse>(`${url}/register`, request);
};
