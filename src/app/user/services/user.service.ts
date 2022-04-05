import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { NewUser, User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    {
      id: 1,
      name: 'Ramon Vila',
      email: 'email1',
      birthDate: '1/1/1970'
    }
  ];

  constructor() { }
  
  getAllUsers(): Observable<User[]> {
    return of(
      this.users.map(user => ({...user}))
    );
  }

  getUser(id: number): Observable<User> {
    const user = this.users.find((u) => u.id === id );

    return user ? of({...user}) : throwError(() => new Error('user(id = ' + id + ') not found'));
  }

  deleteUser(id: number): Observable<string> {
    const index = this.users.findIndex((u) => u.id === id );

    if (index > -1) {
      this.users.splice(index, 1);
      return of('user(id = ' + id + ') deleted');
    } else {
      return throwError(() => new Error('user(id = ' + id + ') not found'));
    }
  }

  putUser(user: User): Observable<string> {
    const index = this.users.findIndex((u) => u.id === user.id );

    if (index > -1) {
      this.users[index] = {...user};
      return of('user(id = ' + user.id + ') updated');
    } else {
      return throwError(() => new Error('user(id = ' + user.id + ') not found'));
    }
  }

  postUser(newUser: NewUser): Observable<number> {
    const id = this.users.reduce((prev, curr) => {
      return (prev <= curr.id) ? curr.id + 1 : prev;
    }, 1);
    const user: User = {
      ...newUser,
      id
    }

    this.users.push(user);

    return of(user.id);
  }

}
