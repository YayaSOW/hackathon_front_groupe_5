import {GenericService} from './generic.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Justificatif, JustificatifResponseDto} from '../../model/justificatif';
import {IJustificatifService} from '../IJustificatifService';
import {Observable} from 'rxjs';
import {RestResponse} from '../../model/restResponse';
import {ClasseResponseDto} from '../../model/classe';
import {environment} from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class JustificatifService extends GenericService<Justificatif> implements IJustificatifService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'justificatifs');
  }

  getAllJustificatifs(page: number, size: number): Observable<RestResponse<JustificatifResponseDto[]>> {
    return this.httpClient.get<RestResponse<JustificatifResponseDto[]>>(`${environment.apiUrl}/justificatifs`);
  }

  getJustificatifById(id: string): Observable<RestResponse<JustificatifResponseDto>> {
    return this.httpClient.get<RestResponse<JustificatifResponseDto>>(`${environment.apiUrl}/justificatifs/${id}`);
  }

  getJustificatifByPresenceId(id: string): Observable<RestResponse<JustificatifResponseDto>> {
    return this.httpClient.get<RestResponse<JustificatifResponseDto>>(`${environment.apiUrl}/justificatifs/presence/${id}`);
  }

  traiterJustificatif(justificatifId: string, validation: string, adminId: string): Observable<RestResponse<JustificatifResponseDto>> {
    const url = `${environment.apiUrl}/justificatifs/${justificatifId}`;
    return this.httpClient.put<RestResponse<JustificatifResponseDto>>(url, { validation, adminId })}
}
