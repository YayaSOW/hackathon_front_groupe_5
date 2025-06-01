import { Etudiant } from './etudiant';

export interface Classe {
    id?: number;
    filiere?: string;
    niveau?: string;
    etudiants?: Array<Etudiant>;
}

export interface ClasseSampleDto {
  id: number;
  filiere: string;
  niveau: string;
}
