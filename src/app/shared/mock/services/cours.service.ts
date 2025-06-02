import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Cours} from '../../model/cours';
import {MOCK_COURS} from '../data/cours.mock';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  getCours(): Observable<Cours[]> {
    return of(MOCK_COURS);
  }
}
