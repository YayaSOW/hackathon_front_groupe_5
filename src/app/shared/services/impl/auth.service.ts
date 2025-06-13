import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { IAuthService } from '../IAuthService';
import { LoginResponse, AuthRequest } from '../../model/auth';
import { User } from '../../model/user';
// import { MOCK_ADMIN } from '../../mock/data/admin.mock';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
  export class AuthService implements IAuthService {
    private apiUrl = 'https://gesabsences-32iz.onrender.com/api/v1';
    private storageKey = 'authData';
    private currentUserSubject = new BehaviorSubject<User | null>(null);
    public currentUser$ = this.currentUserSubject.asObservable();
    private token: string | null = null;

    constructor(private http: HttpClient) {
      this.loadFromStorage();
      
    }

    private loadFromStorage(): void {
      try {
        const savedData = localStorage.getItem(this.storageKey);
        if (savedData) {
          const { user, token } = JSON.parse(savedData);
          if (user?.role === 'ADMIN') {
            this.currentUserSubject.next(user);
            this.token = token;
            console.log('Utilisateur chargé depuis localStorage:', user);
          } else {
            this.clearStorage();
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement de localStorage:', error);
        this.clearStorage();
      }
    }
  
    private clearStorage(): void {
      localStorage.removeItem(this.storageKey);
      this.currentUserSubject.next(null);
      this.token = null;
    }
  
    login(login: string, password: string): Observable<LoginResponse> {
      const credentials: AuthRequest = { login, password };
      console.log('Tentative de connexion avec:', credentials);
      return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, credentials).pipe(
        tap((response: LoginResponse) => {
          if (response.results?.user?.role === 'ADMIN') {
            this.currentUserSubject.next(response.results.user);
            this.token = response.results.token;
            localStorage.setItem(this.storageKey, JSON.stringify({
              user: response.results.user,
              token: response.results.token
            }));
            console.log('Utilisateur connecté:', response.results.user);
          } else {
            throw new Error('Seuls les administrateurs peuvent se connecter.');
          }
        }),
        catchError(error => {
          console.error('Erreur de connexion:', error);
          return throwError(() => new Error('Identifiants incorrects ou erreur serveur.'));
        })
      );
    }
  
    isAuthenticated(): boolean {
      const authenticated = !!this.currentUserSubject.value && !!this.token;
      console.log('isAuthenticated:', authenticated);
      return authenticated;
    }
  
    getCurrentUser(): User | null {
      return this.currentUserSubject.value;
    }
  
    getToken(): string | null {
      return this.token;
    }
  
    logout(): void {
      console.log('Déconnexion');
      this.clearStorage();
    }
  }
