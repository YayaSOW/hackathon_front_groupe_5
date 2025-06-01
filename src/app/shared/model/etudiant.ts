import { Classe } from './classe';
import { Presence } from './presence';


export interface Etudiant {
    id?: number;
    nom?: string;
    prenom?: string;
    login?: string;
    telephone?: string;
    password?: string;
    matricule?: string;
    classe?: Classe;
    status?: boolean;
    absences?: Array<Presence>;
}

