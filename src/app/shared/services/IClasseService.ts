import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse';
import {ClasseResponseDto} from '../model/classe';

export interface IClasseService {
  getAllClasses(page: number, size: number):Observable<RestResponse<ClasseResponseDto[]>>;
}
