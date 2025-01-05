import httpClient from '@api/httpClient';

import {
  LoggedUser,
  OtpResponse,
  RegisterRequest,
  SendOtpRequest,
  VerifyOtpRequest,
} from './types';

const url = '/auth';

export const sendOtp = (request: SendOtpRequest) => {
  console.log('request', request);
  return httpClient.post<void, OtpResponse>(`${url}/send-otp`, request);
};

export const verifyOtp = (request: VerifyOtpRequest) => {
  return httpClient.post<void, LoggedUser>(`${url}/verify-otp`, request);
};

export const register = (request: RegisterRequest) => {
  return httpClient.post<void, OtpResponse>(`${url}/register`, request);
};
