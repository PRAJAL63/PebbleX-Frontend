export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  message: string;
  token: string;
}
