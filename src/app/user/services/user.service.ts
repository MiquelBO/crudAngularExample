import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { USERS } from '../models/mocks';
import { NewUser, User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllUsers(): Observable<User[]> {
    const usersCopia = JSON.parse(JSON.stringify(USERS));
    return of(usersCopia);
  }

  getUser(id: number): Observable<User> {
    const user = USERS.find((u) => u.id === id );
    if (user) {
      const userCopia = JSON.parse(JSON.stringify(user));
      return of(userCopia);
    } else {
      return throwError('user(id = ' + id + ') not found');
    }
  }

  deleteUser(id: number): Observable<string> {
    const index = USERS.findIndex((u) => u.id === id );
    if (index > -1) {
      USERS.splice(index, 1);
      return of('user(id = ' + id + ') deleted');
    } else {
      return throwError('user(id = ' + id + ') not found');
    }
  }

  putUser(user: User): Observable<User> {
    const index = USERS.findIndex((u) => u.id === user.id );
    if (index > -1) {
      USERS[index] = user;
      return of(user);
    } else {
      return throwError('user(id = ' + user.id + ') not found');
    }
  }

  postUser(newUser: NewUser): Observable<User> {
    let maxid = 0;
    USERS.forEach((u: User) => { if ((u.id) && (u.id > maxid)) { maxid = u.id; } });

    const user: User = {
      ...newUser,
      id: maxid + 1
    }

    USERS.push(user);
    return of(user);
  }

}
