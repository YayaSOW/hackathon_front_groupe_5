import { User } from './user';

export interface LoginResponse {
  message: string;
  success: boolean;
  data: User | null;
}

export interface AuthRequest {
  login: string;
  password: string;
}
