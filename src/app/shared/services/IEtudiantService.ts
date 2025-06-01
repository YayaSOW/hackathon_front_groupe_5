import {Observable} from 'rxjs';
import {Etudiant} from '../model/etudiant';

export interface IEtudiantService {
  getAllEtudiants():Observable<Etudiant>;
  getAllEtudiantsByClasse():Observable<Etudiant[]>;
  getAllEtudiantsByStatut():Observable<Etudiant[]>;
}
