export interface User {
  id: number;
  name: string;
  email?: string;
  birthDate: string;
}

export interface NewUser extends Omit<User, 'id'> {
  id: undefined;
}
