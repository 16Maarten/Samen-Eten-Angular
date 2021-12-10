import { Entity } from 'src/app/shared/generics/entity.model';
export class Review extends Entity {
    text: string = ""
    rating: number= 0
    creationDate: Date = new Date()
    user: string = ""
}