export interface User {
  id: string;
  name: string;
  email?: string;
  birthDate: string;
}

export type NewUser = Omit<User, 'id'>;
