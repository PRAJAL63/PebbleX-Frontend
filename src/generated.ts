export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: {
    message: string;
    token: string;
  };
}

export interface UserRegisterInput {
  password: string;
  full_name: string;
  email: string;
}

export interface UserRegisterResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: {
    message: string;
    data: {
      userId: string;
    };
  };
}

export interface UserForgetPasswordInput {
  email: string;
}

export interface UserForgetPasswordResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: {
    message: string;
    data: {
      userId: string;
    };
  };
}

export interface UserResetPasswordInput {
  password: string;
}

export interface UserResetPasswordResponse {
  statusCode: number;
  headers: Record<string, string>;
  body: {
    message: string;
  };
}
