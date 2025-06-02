import {EtudiantResponseDto} from '../../model/etudiant';
import {Observable} from 'rxjs';
import {RestResponse} from '../../model/restResponse';
import {GenericService} from './generic.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environments';
import {Classe, ClasseResponseDto} from '../../model/classe';
import {IClasseService} from '../IClasseService';

@Injectable({
  providedIn: 'root'
})
export class ClasseService extends GenericService<Classe> implements IClasseService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'classes');
  }

  getAllClasses(): Observable<RestResponse<ClasseResponseDto[]>> {
    return this.httpClient.get<RestResponse<ClasseResponseDto[]>>(`${environment.apiUrl}/classes`);
  }

}
