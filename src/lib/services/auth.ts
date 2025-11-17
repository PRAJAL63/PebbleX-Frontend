import type { UserLoginInput } from '../../generated';
import axiosInstance from './axios';

export const login = async (data: UserLoginInput) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    const err = error as {
      response?: {
        data?: {
          body?: {
            message?: string;
          };
          message?: string;
        };
      };
    };
    const errorMessage =
      err.response?.data?.message ||
      err.response?.data?.body?.message ||
      'An unknown error occurred during login.';
    throw new Error(errorMessage);
  }
};
