import { Component, OnInit } from '@angular/core';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome.create',
  templateUrl: './studenthome.create.component.html',
  styleUrls: ['./studenthome.create.component.css']
})
export class StudenthomeCreateComponent implements OnInit {
  id: number
  studenthomeName: string
  studenthomeStreetName: string
  studenthomeHouseNumber: number
  studenthomePostalCode: string
  studenthomeResidence: string
  studenthomePhoneNumber: string

  constructor(private studenthomeService: StudenthomeService) {
    this.id = studenthomeService.getNewId()
    this.studenthomeName = ""
    this.studenthomeStreetName = ""
    this.studenthomePostalCode = ""
    this.studenthomeHouseNumber = 0;
    this.studenthomeResidence = ""
    this.studenthomePhoneNumber = ""
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    let newStudenthome: Studenthome = {
      id: this.id,
      name: this.studenthomeName,
      streetName: this.studenthomeStreetName,
      houseNumber: this.studenthomeHouseNumber,
      postalCode: this.studenthomePostalCode,
      residence: this.studenthomeResidence,
      phoneNumber: this.studenthomePhoneNumber
    }
    this.studenthomeService.createStudenthome(newStudenthome)
  }

}
