import { Observable } from 'rxjs';
import { LoginResponse } from '../model/auth';
import { User } from '../model/user';

export interface IAuthService {
  login(login: string, password: string): Observable<LoginResponse>;
  isAuthenticated(): boolean;
  getCurrentUser(): User | null;
  logout(): void;
}