export interface User {
  id: string;
  nom: string;
  prenom: string;
  telephone: string;
  login: string;
  role: Role;
}

export type Role = 'ADMIN' | 'VIGILE' | 'ETUDIANT';

export enum RoleEnum {
  ADMIN = "Admin",
  VIGILE = "Vigile",
  ETUDIANT = "Etudiant"
}
