import { Etudiant } from './etudiant';
import { Justificatif } from './justificatif';
import { Admin } from './admin';
import { Cours } from './cours';


export interface Presence {
    id: string;
    date: string;
    typePresence: TypePresence;
    justificatifs: Array<Justificatif>;
    etudiant: Etudiant;
    cours: Cours;
    admin?: Admin;
}
export enum TypePresence {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  RETARD = 'RETARD'
}

export interface PresenceResponseDto {
    id: string,
    date: string,
    typePresence: Presence,
    cours: string;
    matricule: string,
    nom: string,
    prenom: string,
}
