import { Entity } from 'src/app/shared/generics/entity.model';
export class User extends Entity {
    firstName: string = ""
    lastName: string = ""
    studentNumber: number = 0
    birthday: Date = new Date()
    email: string =""
    password: string =""
    token: string = ""
  }