import { Classe } from './classe';
import { Presence } from './presence';
import {User} from './user';


export interface Etudiant extends User {
    matricule?: string;
    classe?: Classe;
    status?: boolean;
    absences?: Array<Presence>;
}

export interface EtudiantSampleDto {
  id: number;
  nom: string;
  prenom: string;
  matricule: string;
  classe: string;
  filiere: string;
  status: boolean;
}

export interface EtudiantWithPresencePaginateDto {
  etudiant : EtudiantSampleDto;
  absences : Presence[],
  currentPage : number;
  totalPages : number;
  isFirst : boolean;
  isLast : boolean;
  pages : number[];
}
