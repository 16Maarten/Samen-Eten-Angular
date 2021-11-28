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
      },
      {
          id: 2,
          firstName: "Gerrit",
          lastName: "de Haan",
          studentNumber: 7493652,
          birthday: new Date("6, 21, 1983"),
          email: "Gerrit@gmail.com",
      },
      {
          id: 3,
          firstName: "Henk",
          lastName: "Rikker",
          studentNumber: 4356872,
          birthday: new Date("5, 12, 1990"),
          email: "Henk@gmail.com",
      },
      {
          id: 4,
          firstName: "Daan",
          lastName: "Zwaan",
          studentNumber: 7495743,
          birthday: new Date("9, 20, 2000"),
          email: "Daan@gmail.com",
      },
      {
          id: 5,
          firstName: "Mart",
          lastName: "de Groot",
          studentNumber: 8375983,
          birthday: new Date("2, 27, 2003"),
          email: "Mart@gmail.com",
      }
  ]
  }

  createUser(item: User) {
    this.users.push(item)
  }

  updateUser(item: User) {
    const index = this.users.findIndex((p) => p.id == item.id)
    this.users[index] = item
  }

  removeUser(id: number) {
    const index = this.users.findIndex((p) => p.id == id)
    this.users.splice(index, 1)
  }

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  getUsersAsObservable(): Observable<User[]> {
    console.log('getUsersAsObservable aangeroepen');
    return of(this.users);
  }

  getUserById(id: number): User {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }

  getNewId() {
    return this.users[this.users.length - 1].id + 1
  }

}
