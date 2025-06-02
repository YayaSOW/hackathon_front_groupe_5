import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAuthService } from '../IAuthService';
import { LoginResponse } from '../../model/auth';
import { User } from '../../model/user';
import { MOCK_ADMIN } from '../../mock/data/admin.mock';
@Injectable({
    providedIn: 'root'
  })
  export class AuthService implements IAuthService {
    private currentUser: User | null = null;

    constructor() {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser);
        console.log('Utilisateur chargé depuis localStorage:', this.currentUser);
      }
    }

    login(login: string, password: string): Observable<LoginResponse> {
      console.log('Tentative de connexion avec:', { login, password });
      const user = MOCK_ADMIN.find(
        (admin) => admin.login === login && admin.password === password
      );

      if (user) {
        this.currentUser = user;
        console.log('Tentative de connexion avec:', );
        console.log('Utilisateur connecté:', this.currentUser);
        return of({
          message: 'Connexion réussie',
          success: true,
          data: user
        });
      }

      return of({
        message: 'Identifiants incorrects',
        success: false,
        data: null
      });
    }

    isAuthenticated(): boolean {
      const authenticated = !!this.currentUser;
      console.log('isAuthenticated:', authenticated);
      return authenticated;
    }

    getCurrentUser(): User | null {
      return this.currentUser;
    }

    logout(): void {
      this.currentUser = null;
      localStorage.removeItem('currentUser');
    }
  }
