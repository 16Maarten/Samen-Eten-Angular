import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from '../meal.model';
import { MealService } from '../meal.service';
import * as moment from 'moment';
@Component({
  selector: 'app-meal.create',
  templateUrl: './meal.edit.component.html',
  styleUrls: ['./meal.edit.component.css']
})
export class MealEditComponent implements OnInit {
  mealId: string | null = null;
  ingredientsList: string
  newDate: string
  public meal: Meal = {
    _id : undefined,
    name : "",
    studenthome : "",
    creationDate: new Date(),
    offerdOn: new Date(),
    organizer: "",
    price: 0,
    allergies: "",
    ingredients: [],
    participants: [],
    reviews: []
  };

  constructor(private route: ActivatedRoute, private router: Router, private mealService: MealService) 
  { this.ingredientsList = ""
    this.newDate = ""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.route.paramMap.subscribe((params) => {
        this.mealId = params.get('id');
        if (this.mealId) {
          // Ophalen bestaande user
          this.mealService
            .read(this.mealId)
            .subscribe((meal) => {
              this.meal = meal
              this.newDate = this.formattedDate(meal.offerdOn)
              console.log(this.newDate)
              //this.meal.offerdOn
              this.meal.organizer = meal.organizer
              this.ingredientsList = meal.ingredients.toString()
            });
        } 
      });
    });
  }
  formattedDate(date : Date) {
    return moment(date).format("yyyy-MM-DDTHH:mm")
  }

  onSubmit() {
    let ingredientsArray = this.ingredientsList?.split(',')
    this.meal.ingredients = ingredientsArray
    this.meal.offerdOn = new Date(this.newDate)
    this.mealService.update(this.meal).subscribe(() => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }
}
