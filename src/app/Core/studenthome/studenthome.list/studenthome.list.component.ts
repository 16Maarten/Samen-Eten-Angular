import { Component, OnInit } from '@angular/core';
import { Studenthome } from '../studenthome.model';
import { StudenthomeService } from '../studenthome.service';
@Component({
  selector: 'app-studenthome.list',
  templateUrl: './studenthome.list.component.html',
  styleUrls: ['./studenthome.list.component.css']
})
export class StudenthomeListComponent implements OnInit {
  studenthomes: Studenthome[] = [];
  constructor(private studenthomeService: StudenthomeService) { }

  ngOnInit(): void {
    this.studenthomeService.list().subscribe((studenthomes) => {
      if (studenthomes == null) {
        this.studenthomes = [];
      } else {
        this.studenthomes = studenthomes;
      }
    });

  }

  onDelete(id: string): void {
   /* this.studenthomeService.removeStudenthome(id)*/
  }
}
