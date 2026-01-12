import type {
  UserForgetPasswordInput,
  UserForgetPasswordResponse,
  UserLoginInput,
  UserLoginResponse,
  UserRegisterInput,
  UserRegisterResponse,
  UserResetPasswordInput,
  UserResetPasswordResponse,
} from '../../generated';
import axiosInstance from './axios';

export const login = async (data: UserLoginInput) => {
  try {
    const response = await axiosInstance.post<UserLoginResponse>('/auth/login', data);
    return response.data;
  } catch (error) {
    const err = error as {
      response?: { data?: { body?: { message?: string }; message?: string } };
    };
    const errorMessage =
      err.response?.data?.body?.message || err.response?.data?.message || 'Login failed';
    throw new Error(errorMessage);
  }
};

export const register = async (data: UserRegisterInput) => {
  try {
    const response = await axiosInstance.post<UserRegisterResponse>('/auth/register', data);
    return response.data;
  } catch (error) {
    const err = error as {
      response?: { data?: { body?: { message?: string }; message?: string } };
    };
    const errorMessage =
      err.response?.data?.body?.message || err.response?.data?.message || 'Login failed';
    throw new Error(errorMessage);
  }
};

export const forgetPassword = async (data: UserForgetPasswordInput) => {
  try {
    const response = await axiosInstance.post<UserForgetPasswordResponse>('/auth/reset-password', {
      email: data.email,
    });
    return response.data;
  } catch (error) {
    const err = error as {
      response?: { data?: { body?: { message?: string }; message?: string } };
    };
    const errorMessage =
      err.response?.data?.body?.message || err.response?.data?.message || 'Reset password failed';
    throw new Error(errorMessage);
  }
};

export const resetPassword = async (data: UserResetPasswordInput) => {
  try {
    const response = await axiosInstance.post<UserResetPasswordResponse>('/auth/reset-password', {
      password: data.password,
    });
    return response.data;
  } catch (error) {
    const err = error as {
      response?: { data?: { body?: { message?: string }; message?: string } };
    };
    const errorMessage =
      err.response?.data?.body?.message || err.response?.data?.message || 'Reset password failed';
    throw new Error(errorMessage);
  }
};
