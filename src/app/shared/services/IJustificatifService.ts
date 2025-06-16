import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse';
import {Justificatif, JustificatifResponseDto} from '../model/justificatif';

export interface IJustificatifService {
  getAllJustificatifs(page: number, size: number):Observable<RestResponse<JustificatifResponseDto[]>>;
  getJustificatifById(id: string):Observable<RestResponse<JustificatifResponseDto>>
  getJustificatifByPresenceId(id: string):Observable<RestResponse<JustificatifResponseDto>>
  traiterJustificatif(justificatifId: string, validation: string, adminId: string):Observable<RestResponse<JustificatifResponseDto>>
}
