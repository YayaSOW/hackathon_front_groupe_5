import { Admin } from './admin';

export interface LoginCredentials {
  login: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: Admin;
}