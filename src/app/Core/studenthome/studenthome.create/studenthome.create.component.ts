import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome.create',
  templateUrl: './studenthome.create.component.html',
  styleUrls: ['./studenthome.create.component.css']
})
export class StudenthomeCreateComponent implements OnInit {
  studenthomeId: string | null = null;

  public studenthome: Studenthome = {
    _id : "",
    name : "",
    streetName : "",
    postalCode : "",
    houseNumber : 0,
    residence : "",
    phoneNumber : "",
    owner : ""
  };

  constructor(private route: ActivatedRoute, private router: Router, private studenthomeService: StudenthomeService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.studenthomeService.create(this.studenthome).subscribe(() => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }
}
