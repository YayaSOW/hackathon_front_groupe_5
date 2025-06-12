import {Observable} from 'rxjs';
import {RestResponse} from '../model/restResponse';
import {CoursResponseDto} from '../model/cours';

export interface ICoursService {
  getAllCours():Observable<RestResponse<CoursResponseDto[]>>;
}
