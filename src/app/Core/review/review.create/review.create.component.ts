import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../user/authentication.service';
import { Meal } from '../../meal/meal.model';
import { MealService } from '../../meal/meal.service';
import { Review } from '../review.model';

@Component({
  selector: 'app-review.create',
  templateUrl: './review.create.component.html',
  styleUrls: ['./review.create.component.css']
})
export class ReviewCreateComponent implements OnInit {
  public review: Review = {
    _id : undefined,
    text : "",
    rating : 0,
    creationDate: new Date(),
    user: ""
  };

  meal: Meal | undefined

  mealId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private mealService: MealService, private authenticationService: AuthenticationService) 
  {}

  ngOnInit(): void {
    this.authenticationService.currentUser$.subscribe((user) => {
      if (user._id != undefined) {
        this.review.user = user._id.toString();
      }
    })
    this.route.paramMap.subscribe((params) => {
      this.mealId = params.get('id');
      if (this.mealId != null) {
        this.mealService
          .read(this.mealId)
          .subscribe((meal) => {
            this.meal = meal;});
      }
    });
  }

  onSubmit() {
    if (this.meal != null) {
      this.meal.reviews.push(this.review)
      this.mealService.update(this.meal).subscribe(() => {
        this.router.navigate(['../..'], {relativeTo: this.route});
      });
    }
  }
}
