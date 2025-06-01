import { Presence } from "../model/presence";
import {MOCK_ETUDIANT} from './etudiant.mock';
import {MOCK_COURS} from './cours.mock';
import {MOCK_ADMIN} from './admin.mock';
import {MOCK_JUSTIFICATIF} from './justificatif.mock';

export const MOCK_PRESENCE: Presence[] = [
  {
    id: 1,
    date: '2025-05-30',
    typePresence: 'ABSENT',
    etudiant: MOCK_ETUDIANT[0],
    cours: MOCK_COURS[0],
    admin: MOCK_ADMIN[0],
    justificatifs: [MOCK_JUSTIFICATIF[0]]
  },
  {
    id: 2,
    date: '2025-05-31',
    typePresence: 'RETARD',
    etudiant: MOCK_ETUDIANT[1],
    cours: MOCK_COURS[1],
    admin: MOCK_ADMIN[0],
    justificatifs: []  }
];

// Liaison des absences aux entités
MOCK_ETUDIANT[0].absences = [MOCK_PRESENCE[0]];
MOCK_ETUDIANT[1].absences = [MOCK_PRESENCE[1]];
MOCK_COURS[0].absences = [MOCK_PRESENCE[0]];
MOCK_COURS[1].absences = [MOCK_PRESENCE[1]];
MOCK_ADMIN[0].absences = [MOCK_PRESENCE[0], MOCK_PRESENCE[1]];
MOCK_JUSTIFICATIF[0].presence = MOCK_PRESENCE[0];
