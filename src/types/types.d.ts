export interface responsUser {
  id: string;
  login: string;
  version: number;
  createdAt: number;
  updatedAt: number;
}

export interface User extends responsUser {
  password: string;
}

export interface Artist {
  id: string; // uuid v4
  name: string;
  grammy: boolean;
}
