import {Observable} from 'rxjs';
import {Etudiant, EtudiantResponseDto} from '../model/etudiant';
import {RestResponse} from '../model/restResponse';

export interface IEtudiantService {
  getAllEtudiants(page: number, size: number):Observable<RestResponse<EtudiantResponseDto[]>>;
  getAllEtudiantsByClasse(classeId: string, page: number, size: number):Observable<RestResponse<EtudiantResponseDto[]>>;
  getAllEtudiantsByStatut(status: string, page: number, size: number):Observable<RestResponse<EtudiantResponseDto[]>>;
}
