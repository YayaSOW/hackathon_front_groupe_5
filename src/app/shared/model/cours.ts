import { Presence } from './presence';


export interface Cours {
    id?: number;
    date?: string;
    nomCours?: string;
    duree?: number;
    absences?: Array<Presence>;
}

