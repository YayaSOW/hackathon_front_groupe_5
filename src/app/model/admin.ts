import { Presence } from './presence';

export interface Admin {
    id?: string;
    nom?: string;
    prenom?: string;
    login?: string;
    telephone?: string;
    password?: string;
    absences?: Array<Presence>;
}

