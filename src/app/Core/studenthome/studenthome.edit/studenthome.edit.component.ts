import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome.edit',
  templateUrl: './studenthome.edit.component.html',
  styleUrls: ['./studenthome.edit.component.css']
})
export class StudenthomeEditComponent implements OnInit {
  studenthomeId: string | null = null;

  public studenthome: Studenthome = {
    _id : "",
    name : "",
    streetName : "",
    postalCode : "",
    houseNumber : 0,
    residence : "",
    phoneNumber : "",
    owner:""
  };

  constructor(private route: ActivatedRoute, private router: Router, private studenthomeService: StudenthomeService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.route.paramMap.subscribe((params) => {
        this.studenthomeId = params.get('id');
        if (this.studenthomeId) {
          // Ophalen bestaande user
          this.studenthomeService
            .read(this.studenthomeId)
            .subscribe((studenthome) => {
              this.studenthome = studenthome;
            });
        } 
      });
    });
  }

  onSubmit() {
      this.studenthomeService.update(this.studenthome).subscribe(() => {
        this.router.navigate(['..'], {relativeTo: this.route});
      });
  }
}
