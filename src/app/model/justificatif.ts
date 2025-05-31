import { Presence } from './presence';


export interface Justificatif {
    id?: string;
    motif?: string;
    validation?: boolean;
    presence?: Presence;
}

