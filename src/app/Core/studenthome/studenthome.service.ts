import { Injectable } from '@angular/core';
import { Studenthome } from './studenthome.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudenthomeService {
  studenthomes: Studenthome[]
  constructor() {
    this.studenthomes = [
      {
          id: 1,
          name: "Studentenvereniging Breda",
          streetName: "lovensdijkstraat",
          houseNumber: 61,
          postalCode: "5634JF",
          residence: "Breda",
          phoneNumber:"0693549674"
      },
      {
          id: 2,
          name: "Studentenvereniging Leiden",
          streetName: "leidseplein",
          houseNumber: 45,
          postalCode: "5634GF",
          residence: "Leiden",
          phoneNumber:"0694638745"
      },
      {
          id: 3,
          name: "Studentenvereniging Delft",
          streetName: "kievietlaan",
          houseNumber: 22,
          postalCode: "5345GS",
          residence: "Delft",
          phoneNumber:"0685376532"
      },
      {
          id: 4,
          name: "Studentenvereniging Rotterdam",
          streetName: "gootstraat",
          houseNumber: 67,
          postalCode: "7495KD",
          residence: "Rotterdam",
          phoneNumber:"0687549821"
      },
      {
          id: 5,
          name: "Studentenvereniging Eindhoven",
          streetName: "copernicusstraat",
          houseNumber: 21,
          postalCode: "9269GI",
          residence: "Eindhoven",
          phoneNumber:"0674948395"
      }
  ]
  }

  createStudenthome(item: Studenthome) {
    this.studenthomes.push(item)
  }

  updateStudenthome(item: Studenthome) {
    const index = this.studenthomes.findIndex((p) => p.id == item.id)
    this.studenthomes[index] = item
  }

  removeStudenthome(id: number) {
    const index = this.studenthomes.findIndex((p) => p.id == id)
    this.studenthomes.splice(index, 1)
  }

  getStudenthomes(): Studenthome[] {
    console.log('getUsers aangeroepen');
    return this.studenthomes;
  }

  getStudenthomesAsObservable(): Observable<Studenthome[]> {
    console.log('getUsersAsObservable aangeroepen');
    return of(this.studenthomes);
  }

  getStudenthomeById(id: number): Studenthome {
    console.log('getUserById aangeroepen');
    return this.studenthomes.filter((studenthome) => studenthome.id === id)[0];
  }

  getNewId() {
    return this.studenthomes[this.studenthomes.length - 1].id + 1
  }
}
