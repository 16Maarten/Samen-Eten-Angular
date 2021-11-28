import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome.detail',
  templateUrl: './studenthome.detail.component.html',
  styleUrls: ['./studenthome.detail.component.css']
})
export class StudenthomeDetailComponent implements OnInit {
  studenthomeId: string | null = null;
  studenthome: Studenthome | null = null;

  constructor(private route: ActivatedRoute, private studenthomeService: StudenthomeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.studenthomeId = params.get('id');
      this.studenthome = this.studenthomeService.getStudenthomeById(Number(this.studenthomeId));
    });
  }

}
