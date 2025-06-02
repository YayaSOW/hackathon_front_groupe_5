import { Presence } from './presence';


export interface Justificatif {
    id: string;
    motif: string;
    validation: boolean;
    presence: Presence;
}

export interface JustificatifResponseDto {
    id: string,
    motif: string;
    validation: boolean;
    nom: string,
    prenom: string,
    matricule: string,
    date: string | null,
    justificatif: { url: string }[];
}
