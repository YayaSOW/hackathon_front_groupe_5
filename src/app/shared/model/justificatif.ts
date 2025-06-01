import { Presence } from './presence';


export interface Justificatif {
    id?: number;
    motif?: string;
    validation?: boolean;
    presence?: Presence;
}

export interface JustificatifOneWebResponse {
  motif: string;
  validation: boolean;
  presenceId: string;
  nomEtudiant: string;
  prenomEtudiant: string;
  matricule: string;
  classe: string;
}
