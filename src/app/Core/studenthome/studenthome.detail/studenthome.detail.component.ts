import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome.detail',
  templateUrl: './studenthome.detail.component.html',
  styleUrls: ['./studenthome.detail.component.css']
})
export class StudenthomeDetailComponent implements OnInit {
  studenthomeId: string | null = null;
  studenthome: Studenthome | undefined;

  constructor(private route: ActivatedRoute,private router: Router, private studenthomeService: StudenthomeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studenthomeId = params.get('id');
      if (this.studenthomeId != null) {
        this.studenthomeService
          .read(this.studenthomeId)
          .subscribe((studenthome) => {
            this.studenthome = studenthome;
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
