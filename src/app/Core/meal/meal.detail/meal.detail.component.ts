import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { Meal } from '../meal.model';
import { User } from '../../user/user.model';
import { Studenthome } from '../../studenthome/studenthome.model';
import { UserService } from '../../user/user.service';
import { StudenthomeService } from '../../studenthome/studenthome.service';
import { MealService } from '../meal.service';
import { AuthenticationService } from '../../user/authentication.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meal.detail',
  templateUrl: './meal.detail.component.html',
  styleUrls: ['./meal.detail.component.css']
})
export class MealDetailComponent implements OnInit {
  mealId: string | null = null;
  meal: Meal | undefined;
  studenthome: Studenthome | undefined;
  user: User | undefined;
  userEdit: Observable<boolean> | undefined
  participant: User | undefined
  userId: string | undefined;
  constructor(private route: ActivatedRoute,private router: Router, private mealService: MealService, private userService: UserService, private studenthomeService: StudenthomeService,private authenticationService: AuthenticationService) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mealId = params.get('id');
      if (this.mealId != null) {
        this.mealService
          .read(this.mealId)
          .subscribe((meal) => {
            this.meal = meal;
            if (this.meal?.studenthome != null) {
              this.studenthomeService
                .read(this.meal.studenthome.toString())
                .subscribe((studenthome) => {
                  this.studenthome = studenthome;
                });
            }
            if (this.meal?.organizer != null) {
              this.userService
                .read(this.meal.organizer.toString())
                .subscribe((user) => {
                  this.user = user;
                });
                if(this.meal != undefined){
                  this.userEdit = this.authenticationService.userEdit(this.meal.organizer)
                }
            }
          });
          this.authenticationService.currentUser$.subscribe((user) => {
            if (user._id != undefined) {
              this.participant = user;
              //this.userId = user._id
            }
          })
      }
    });
  }

  remove(): void {
    if (this.mealId != null) {
      this.mealService.delete(this.mealId).subscribe(() => {
        this.router.navigate(['./meals']);
      });
    }
  }

  removeReview(): void {
    if (this.meal != null && this.participant != undefined) {
      for (let i = 0; i < this.meal.reviews.length; i++) {
        if(this.meal.reviews[i].user == this.participant._id){
          this.meal.reviews.splice(i, 1);
        }
      }
      this.mealService.update(this.meal).subscribe(() => {
        this.router.navigate(['.'], {relativeTo: this.route});
      });
    }
  }

  removeParticipant(): void {
    if (this.meal != null && this.participant != undefined) {
      for (let i = 0; i < this.meal.participants.length; i++) {
        if(this.meal.participants[i].user._id == this.participant._id){
          this.meal.participants.splice(i, 1);
        }
      }
      this.mealService.update(this.meal).subscribe(() => {
        this.router.navigate(['.'], {relativeTo: this.route});
      });
    }
  }

  participate(): void {
    if (this.meal != null && this.participant != undefined) {
      this.meal.participants.push({creationDate: new Date(), user: this.participant, _id: undefined})
      this.mealService.update(this.meal).subscribe(() => {
        this.router.navigate(['..'], {relativeTo: this.route});
      });
    }
  }
  formatDate(date: Date): string {
    return moment(date).locale('en').format('LLL')
  }
}
