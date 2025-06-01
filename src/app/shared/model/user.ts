export interface User {
  id?: number;
  nom?: string;
  prenom?: string;
  login?: string;
  telephone?: string;
  password?: string;
}

export type Role = "Admin" | "Vigile" | "Etudiant";

export enum RoleEnum {
  ADMIN = "Admin",
  VIGILE = "Vigile",
  ETUDIANT = "Etudiant"
}

export interface LoginResponse {
  message: string;
  success: boolean;
  data: User|null;
}

