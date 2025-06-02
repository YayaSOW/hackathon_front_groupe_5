import { Observable } from "rxjs";
import {RestResponse} from '../model/restResponse';

export interface IGenericService<T> {
  create(item: T): Observable<RestResponse<T>>;
  update(item: T, id: number): Observable<RestResponse<T>>;
  delete(item: T, id: number): Observable<void>;
  getAll(page: number, size: number): Observable<RestResponse<T[]>>;
  getOne(id: number): Observable<RestResponse<T>>;
}
