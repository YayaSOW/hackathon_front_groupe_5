import {Observable} from 'rxjs';
import {RestResponse} from '../../model/restResponse';
import {GenericService} from './generic.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environments';
import {Cours, CoursResponseDto} from '../../model/cours';
import {ICoursService} from '../ICoursService';

@Injectable({
  providedIn: 'root'
})
export class CoursService extends GenericService<Cours> implements ICoursService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'cours');
  }

  getAllCours(): Observable<RestResponse<CoursResponseDto[]>> {
    return this.httpClient.get<RestResponse<CoursResponseDto[]>>(`${environment.apiUrl}/cours`);
  }

}
