import { User } from './user';

export interface AuthRequest {
  login: string;
  password: string;
}

export interface LoginResponse {
  type: string;
  results: {
    token: string;
    user: User;
  };
  status: number;
}
