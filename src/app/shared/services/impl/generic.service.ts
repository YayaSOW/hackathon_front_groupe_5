import { Injectable } from '@angular/core';
import { IGenericService } from '../IGenericService';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../../environments/environments';
import {RestResponse} from '../../model/restResponse';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> implements IGenericService<T> {

  constructor(protected httpClient: HttpClient, protected endPoint: String) { }

  create(item: T): Observable<RestResponse<T>> {
    return this.httpClient.post<RestResponse<T>>(`${environment.apiUrl}/${this.endPoint}`, item);
  }
  update(item: T, id: number): Observable<RestResponse<T>> {
    return this.httpClient.put<RestResponse<T>>(`${environment.apiUrl}/${this.endPoint}/${id}`, item);
  }
  delete(item: T, id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/${this.endPoint}/${id}`);
  }
  getAll(page: number = environment.page, size: number = environment.size): Observable<RestResponse<T[]>> {
    return this.httpClient.get<RestResponse<T[]>>(`${environment.apiUrl}/${this.endPoint}?page=${page}&size=${size}`);
  }
  getOne(id: number): Observable<RestResponse<T>> {
    return this.httpClient.get<RestResponse<T>>(`${environment.apiUrl}/${this.endPoint}/${id}`);
  }
}
