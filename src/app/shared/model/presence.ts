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

export type TypePresence = 'PRESENT' | 'ABSENT' | 'RETARD';

export enum TypePresenceEnum {
  PRESENT = 'Present',
  ABSENT = 'Absent',
  RETARD = 'Retard'
}

export interface PresenceResponseDto {
    id: string,
    date: string,
    typePresence: string,
    nomCours: string;
    matricule: string,
    nom: string,
    prenom: string,
}
