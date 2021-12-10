import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';
import { AuthenticationService } from '../../user/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-studenthome.detail',
  templateUrl: './studenthome.detail.component.html',
  styleUrls: ['./studenthome.detail.component.css']
})
export class StudenthomeDetailComponent implements OnInit {
  studenthomeId: string | null = null;
  studenthome: Studenthome | undefined;
  userEdit: Observable<boolean> | undefined
  constructor(private route: ActivatedRoute,private router: Router, private studenthomeService: StudenthomeService, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studenthomeId = params.get('id');
      if (this.studenthomeId != null) {
        this.studenthomeService
          .read(this.studenthomeId)
          .subscribe((studenthome) => {
            this.studenthome = studenthome;
            if(this.studenthome != undefined){
              this.userEdit = this.authenticationService.userEdit(this.studenthome.owner)
              console.log(this.userEdit)
            }
          });
      }
    });
  }

  remove(): void {
    if (this.studenthomeId != null) {
      this.studenthomeService.delete(this.studenthomeId).subscribe(() => {
        this.router.navigate(['../']);
      });
    }
  }

}
