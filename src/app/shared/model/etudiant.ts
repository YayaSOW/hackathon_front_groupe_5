import { Classe } from './classe';
import { Presence } from './presence';
import {Role, User} from './user';


export interface Etudiant extends User {
    matricule: string;
    classe: Classe;
    status: boolean;
    absences: Array<Presence>;
}

export interface EtudiantResponseDto {
  id: string;
  nom: string;
  prenom: string;
  matricule: string;
  classe: string;
  status: boolean;
  role: Role;
}
