import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = '/api/v1/etudiants';

  constructor(private http: HttpClient) {}
  getAll(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.baseUrl);
  }

  getById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/${id}`);
  }

  create(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.baseUrl, etudiant);
  }

  update(id: number, etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.baseUrl}/${id}`, etudiant);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
