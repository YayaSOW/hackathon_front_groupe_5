import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Etudiant} from '../../model/etudiant';
import {MOCK_ETUDIANT} from '../data/etudiant.mock';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  getEtudiants(): Observable<Etudiant[]> {
    return of(MOCK_ETUDIANT);
  }
}
