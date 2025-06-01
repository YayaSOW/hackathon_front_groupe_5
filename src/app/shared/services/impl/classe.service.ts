import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {MOCK_CLASSE} from '../../mock/classe.mock';
import {Classe} from '../../model/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  getClasses(): Observable<Classe[]> {
    return of(MOCK_CLASSE);
  }
}
