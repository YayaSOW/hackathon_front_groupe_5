import { Presence } from './presence';
import {User} from './user';

export interface Admin extends User {
    absences?: Array<Presence>;
}

