import {Etudiant} from '../../model/etudiant';
import {MOCK_CLASSE} from './classe.mock';


export const MOCK_ETUDIANT: Etudiant[] = [
  {
    id: "1",
    nom: 'Ndoye',
    prenom: 'Fatou',
    login: 'fatou-ndoye@gmail.com',
    telephone: '770000002',
    password: 'passer123',
    matricule: 'INF2025-001',
    classe: MOCK_CLASSE[0],
    status: true,
    absences: [],
    role: "ETUDIANT"
  },
  {
    id: "2",
    nom: 'Sagna',
    prenom: 'Mamadou',
    login: 'mamadou-sagna@gmail.com',
    telephone: '770000003',
    password: 'passer123',
    matricule: 'INF2025-002',
    classe: MOCK_CLASSE[1],
    status: false,
    absences: [],
    role: "ETUDIANT"
  },
  {
    id: "3",
    nom: 'Sarr',
    prenom: 'Dieyna',
    login: 'dieyna-sarr@gmail.com',
    telephone: '770000009',
    password: 'passer123',
    matricule: 'INF2025-003',
    classe: MOCK_CLASSE[1],
    status: false,
    absences: [],
    role: "ETUDIANT"
  }
];

MOCK_CLASSE[0].etudiants = [MOCK_ETUDIANT[0]];
MOCK_CLASSE[1].etudiants = [MOCK_ETUDIANT[1]];
MOCK_CLASSE[1].etudiants = [MOCK_ETUDIANT[2]];
