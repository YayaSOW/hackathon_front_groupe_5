import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse';
import {PresenceResponseDto} from '../model/presence';
import {environment} from '../../../environments/environments';

export interface IPresenceService {
  getAllPresences(page: number, size: number):Observable<RestResponse<PresenceResponseDto[]>>;
  getAllPresencesByType(type: string, page: number, size: number):Observable<RestResponse<PresenceResponseDto[]>>;
  getAllPresencesByTypeAndDate(type: string, date: string, page: number, size: number):Observable<RestResponse<PresenceResponseDto[]>>;
  getAllPresencesByTypeAndCours(type: string, coursId: string, page: number, size: number):Observable<RestResponse<PresenceResponseDto[]>>;
  getAllPresencesByTypeAndEtat(type: string, etat: string, page: number, size: number):Observable<RestResponse<PresenceResponseDto[]>>;
  getAllPresencesByTypeAndCoursAndDate(type: string, coursId: string, date: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>>;
  getAllPresencesByTypeAndEtatAndCoursAndDate(type: string, coursId: string, etat: string, date: string, page: number, size: number): Observable<RestResponse<PresenceResponseDto[]>>;
  getPresenceById(id: string): Observable<RestResponse<PresenceResponseDto>>;
}
