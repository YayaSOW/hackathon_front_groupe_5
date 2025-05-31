import { Presence } from './presence';


export interface Cours {
    id?: string;
    date?: string;
    nomCours?: string;
    duree?: number;
    absences?: Array<Presence>;
}

