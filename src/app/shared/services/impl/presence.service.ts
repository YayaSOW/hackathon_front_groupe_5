import {Observable} from 'rxjs';
import {RestResponse} from '../../model/restResponse';
import {GenericService} from './generic.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environments';
import {Presence, PresenceResponseDto} from '../../model/presence';
import {IPresenceService} from '../IPresenceService';

@Injectable({
  providedIn: 'root'
})
export class PresenceService extends GenericService<Presence> implements IPresenceService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'presences');
  }

  getAllPresences(page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/paginate?page=${page}&size=${size}`);
  }

  getAllPresencesByType(type: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/type=${type}?page=${page}&size=${size}`);
  }

  getAllPresencesByTypeAndCours(type: string, coursId: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/type=${type}/cours/${coursId}?page=${page}&size=${size}`);
  }

  getAllPresencesByTypeAndDate(type: string, date: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/type=${type}/date=${date}?page=${page}&size=${size}`);
  }

  getAllPresencesByTypeAndEtat(type: string, etat: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/type=${type}/etat=${etat}?page=${page}&size=${size}`);
  }

  getPresenceById(id: string): Observable<RestResponse<PresenceResponseDto>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto>>(`${environment.apiUrl}/presences/${id}`);
  }

  getAllPresencesByTypeAndEtatAndCoursAndDate(type: string, coursId: string, etat: string, date: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/type=${type}/cours=${coursId}/etat=${etat}/date=${date}?page=${page}&size=${size}`);
  }

  getAllPresencesByTypeAndCoursAndDate(type: string, coursId: string, date: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>> {
    return this.httpClient.get<RestResponse<PresenceResponseDto[]>>(`${environment.apiUrl}/presences/type=${type}/cours=${coursId}/date=${date}?page=${page}&size=${size}`);
  }



}
