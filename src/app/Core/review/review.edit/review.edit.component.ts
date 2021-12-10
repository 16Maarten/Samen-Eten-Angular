import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../../meal/meal.model';
import { MealService } from '../../meal/meal.service';
import { Review } from '../review.model';

@Component({
  selector: 'app-review.edit',
  templateUrl: './review.edit.component.html',
  styleUrls: ['./review.edit.component.css']
})
export class ReviewEditComponent implements OnInit {
  public review: Review = {
    _id : undefined,
    text : "",
    rating : 0,
    creationDate: new Date(),
    user: ""
  };

  meal: Meal | undefined
  reviewId: string | null = null;
  mealId: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private mealService: MealService) 
  {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.mealId = params.get('id');
      this.reviewId = params.get('reviewId');
      if (this.mealId != null) {
        this.mealService
          .read(this.mealId)
          .subscribe((meal) => {
            this.meal = meal
            if(this.meal != undefined){
              for (let i = 0; i < this.meal.reviews.length; i++) {
                console.log(this.meal.reviews[i]._id+"==" + this.reviewId)
                if(this.meal.reviews[i]._id == this.reviewId){
                  this.review = this.meal.reviews[i]
                }
              }
            }
          });
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
