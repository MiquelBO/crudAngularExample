import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser, User } from '../models/user.interface';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.API_USERS);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${environment.API_USERS}/${id}`);
  }

  deleteUser(id: number): Observable<string> {
    return this.http.delete<string>(`${environment.API_USERS}/${id}`);
  }

  putUser(user: User): Observable<string> {
    return this.http.put<string>(`${environment.API_USERS}/${user.id}`, user);
  }

  postUser(newUser: NewUser): Observable<number> {
    return this.http.post<number>(environment.API_USERS, newUser);
  }

}
