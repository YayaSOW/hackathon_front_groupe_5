import { Presence } from './presence';

export interface Admin {
    id?: number;
    nom?: string;
    prenom?: string;
    login?: string;
    telephone?: string;
    password?: string;
    absences?: Array<Presence>;
}

