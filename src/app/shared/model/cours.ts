import { Presence } from './presence';


export interface Cours {
    id: string;
    date: string;
    nomCours: string;
    duree: number;
    absences: Array<Presence>;
}

export interface CoursResponseDto {
  id: string;
  date: string;
  nomCours: string;
  heureDebut: string;
  heureFin: string;
}
