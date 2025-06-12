import {Observable} from 'rxjs';
import {EtudiantResponseDto} from '../model/etudiant';
import {RestResponse} from '../model/restResponse';

export interface IEtudiantService {
  getAllEtudiants(page: number, size: number):Observable<RestResponse<EtudiantResponseDto[]>>;
  getAllEtudiantsByClasse(classeId: string, page: number, size: number):Observable<RestResponse<EtudiantResponseDto[]>>;
  getAllEtudiantsByStatut(status: string, page: number, size: number):Observable<RestResponse<EtudiantResponseDto[]>>;
  getAllEtudiantsByClasseAndStatut(classe: string, status: string, page: number, size: number): Observable<RestResponse<EtudiantResponseDto[]>>;
}
