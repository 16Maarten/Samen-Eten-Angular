import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome.edit',
  templateUrl: './studenthome.edit.component.html',
  styleUrls: ['./studenthome.edit.component.css']
})
export class StudenthomeEditComponent implements OnInit {
  studenthomeId: string | null = null;
  studenthome: Studenthome | null = null;

  id: number
  studenthomeName: string
  studenthomeStreetName: string
  studenthomeHouseNumber: number
  studenthomePostalCode: string
  studenthomeResidence: string
  studenthomePhoneNumber: string

  constructor(private route: ActivatedRoute, private studenthomeService: StudenthomeService) {
    this.id = studenthomeService.getNewId()
    this.studenthomeName = ""
    this.studenthomeStreetName = ""
    this.studenthomePostalCode = ""
    this.studenthomeHouseNumber = 0;
    this.studenthomeResidence = ""
    this.studenthomePhoneNumber = ""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studenthomeId = params.get('id');
      this.studenthome = this.studenthomeService.getStudenthomeById(Number(this.studenthomeId));
    });
  }

  onSubmit(): void {
    let newStudenthome: Studenthome = {
      id: this.studenthome?.id || 0,
      name: this.studenthomeName,
      streetName: this.studenthomeStreetName,
      houseNumber: this.studenthomeHouseNumber,
      postalCode: this.studenthomePostalCode,
      residence: this.studenthomeResidence,
      phoneNumber: this.studenthomePhoneNumber
    }
    this.studenthomeService.updateStudenthome(newStudenthome)
  }

}