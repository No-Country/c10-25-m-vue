export interface LoginResp {
  status: string;
  message: string;
  token: string;
  user: LoginUser;
}

export interface LoginUser {
  id: number;
  name: string;
  email: string;
  role: string;
}
