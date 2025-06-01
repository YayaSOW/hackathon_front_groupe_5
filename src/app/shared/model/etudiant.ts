import { Classe } from './classe';
import { Presence } from './presence';
import {User} from './user';


export interface Etudiant extends User {
    matricule?: string;
    classe?: Classe;
    status?: boolean;
    absences?: Array<Presence>;
}

