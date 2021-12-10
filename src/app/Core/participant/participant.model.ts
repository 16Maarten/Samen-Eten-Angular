import { Entity } from 'src/app/shared/generics/entity.model';
import { User } from '../user/user.model';
export class Participant extends Entity {
    creationDate: Date = new Date()
    user: User = {
        _id : "",
        firstName : "",
        lastName : "",
        email : "",
        studentNumber : 0,
        birthday : new Date(),
        password: "",
        token: ""
    }
}