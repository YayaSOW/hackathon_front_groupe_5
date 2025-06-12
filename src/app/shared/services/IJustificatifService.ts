import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse';
import {JustificatifResponseDto} from '../model/justificatif';

export interface IJustificatifService {
  getAllJustificatifs(page: number, size: number):Observable<RestResponse<JustificatifResponseDto[]>>;
  getJustificatifById(id: string):Observable<RestResponse<JustificatifResponseDto>>
}
