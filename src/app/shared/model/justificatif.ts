import { Presence } from './presence';


export interface Justificatif {
    id: string;
    motif: string;
    validation: boolean;
    presence: Presence | undefined; // undefined pour pouvoir autoriser le mock justificatif.
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
