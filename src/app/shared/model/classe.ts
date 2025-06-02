import { Etudiant } from './etudiant';

export interface Classe {
    id: string;
    filiere: string;
    niveau: string;
    etudiants: Array<Etudiant>;
}
