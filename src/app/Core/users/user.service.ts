import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly users: User[]
  constructor() {
    this.users = [
      {
          id: 1,
          firstName: "Maarten",
          lastName: "de Zwart",
          studentNumber: 2176137,
          birthday: new Date("6, 17, 2002"),
          email: "Maarten@gmail.com",
          password: "secret"
      },
      {
          id: 2,
          firstName: "Gerrit",
          lastName: "de Haan",
          studentNumber: 7493652,
          birthday: new Date("6, 21, 1983"),
          email: "Gerrit@gmail.com",
          password: "secret"
      },
      {
          id: 3,
          firstName: "Henk",
          lastName: "Rikker",
          studentNumber: 4356872,
          birthday: new Date("5, 12, 1990"),
          email: "Henk@gmail.com",
          password: "secret"
      },
      {
          id: 4,
          firstName: "Daan",
          lastName: "Zwaan",
          studentNumber: 7495743,
          birthday: new Date("9, 20, 2000"),
          email: "Daan@gmail.com",
          password: "secret"
      },
      {
          id: 5,
          firstName: "Mart",
          lastName: "de Groot",
          studentNumber: 8375983,
          birthday: new Date("2, 27, 2003"),
          email: "Mart@gmail.com",
          password: "secret"
      }
  ]
  }

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  getUsersAsObservable(): Observable<User[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    return of(this.users);
  }

  getUserById(id: number): User {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }

}
