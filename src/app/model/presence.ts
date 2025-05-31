import { Etudiant } from './etudiant';
import { Justificatif } from './justificatif';
import { Admin } from './admin';
import { Cours } from './cours';


export interface Presence {
    id?: string;
    date?: string;
    typePresence?: Presence.TypePresenceEnum;
    justificatifs?: Array<Justificatif>;
    etudiant?: Etudiant;
    cours?: Cours;
    admin?: Admin;
}
export namespace Presence {
    export const TypePresenceEnum = {
        Present: 'PRESENT',
        Absent: 'ABSENT',
        Retard: 'RETARD'
    } as const;
    export type TypePresenceEnum = typeof TypePresenceEnum[keyof typeof TypePresenceEnum];
}


