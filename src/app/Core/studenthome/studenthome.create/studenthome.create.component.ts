import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';
import { AuthenticationService } from '../../user/authentication.service';

@Component({
  selector: 'app-studenthome.create',
  templateUrl: './studenthome.create.component.html',
  styleUrls: ['./studenthome.create.component.css']
})
export class StudenthomeCreateComponent implements OnInit {

  public studenthome: Studenthome = {
    _id : undefined,
    name : "",
    streetName : "",
    postalCode : "",
    houseNumber : 0,
    residence : "",
    phoneNumber : "",
    owner : ""
  };

  constructor(private route: ActivatedRoute, private router: Router, private studenthomeService: StudenthomeService, private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.currentUser$.subscribe((user) => {
      if (user._id != undefined) {
        this.studenthome.owner = user._id.toString();
      }
    })
  }

  onSubmit() {
    this.studenthomeService.create(this.studenthome).subscribe(() => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }
}
