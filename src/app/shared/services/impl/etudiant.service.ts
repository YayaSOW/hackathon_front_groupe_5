import {IEtudiantService} from '../IEtudiantService';
import {Etudiant, EtudiantResponseDto} from '../../model/etudiant';
import {Observable} from 'rxjs';
import {RestResponse} from '../../model/restResponse';
import {GenericService} from './generic.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService extends GenericService<Etudiant> implements IEtudiantService {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'etudiants');
  }

  getAllEtudiants(page: number, size: number): Observable<RestResponse<EtudiantResponseDto[]>> {
    return this.httpClient.get<RestResponse<EtudiantResponseDto[]>>(`${environment.apiUrl}/etudiants/paginate?page=${page}&size=${size}`);
  }

  getAllEtudiantsByClasse(classeId: string, page: number, size: number): Observable<RestResponse<EtudiantResponseDto[]>> {
    return this.httpClient.get<RestResponse<EtudiantResponseDto[]>>(`${environment.apiUrl}/etudiants/classe/${classeId}?page=${page}&size=${size}`);
  }

  getAllEtudiantsByStatut(status: string, page: number, size: number): Observable<RestResponse<EtudiantResponseDto[]>> {
    return this.httpClient.get<RestResponse<EtudiantResponseDto[]>>(`${environment.apiUrl}/etudiants/status/${status}?page=${page}&size=${size}`);
  }

  getAllEtudiantsByClasseAndStatut(classe: string, status: string, page: number, size: number): Observable<RestResponse<EtudiantResponseDto[]>> {
     return this.httpClient.get<RestResponse<EtudiantResponseDto[]>>(`${environment.apiUrl}/etudiants/classe/${classe}/status/${status}?page=${page}&size=${size}`);
  }
}
