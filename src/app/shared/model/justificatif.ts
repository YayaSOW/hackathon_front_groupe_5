import { Presence } from './presence';


export interface Justificatif {
    id?: number;
    motif?: string;
    validation?: boolean;
    presence?: Presence;
}

