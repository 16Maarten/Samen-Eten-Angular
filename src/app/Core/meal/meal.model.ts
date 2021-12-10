import { Entity } from 'src/app/shared/generics/entity.model';
import { Studenthome } from '../studenthome/studenthome.model';
import { User } from '../user/user.model';
import { Review } from '../review/review.model';
import { Participant } from '../participant/participant.model';

export class Meal extends Entity {
    name: string = ""
    studenthome: string = ""
    creationDate: Date = new Date()
    offerdOn: Date = new Date()
    organizer: string = ""
    price: number= 0
    allergies: string = ""
    ingredients: string[] = []
    participants: Participant[] = [{
        _id : "",   
        creationDate: new Date(),
        user: {
            _id : "",
            firstName : "",
            lastName : "",
            email : "",
            studentNumber : 0,
            birthday : new Date(),
            password: "",
            token : ""
        }}]
    reviews: Review[] = 
    [{  
     _id: "",
    text: "",
    rating: 0,
    creationDate: new Date(),
    user: ""}]
}