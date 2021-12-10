import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal.model';
import {MealService } from '../meal.service';
import * as moment from 'moment';
@Component({
  selector: 'app-studenthome.list',
  templateUrl: './meal.list.component.html',
  styleUrls: ['./meal.list.component.css']
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];
  constructor(private mealService: MealService) { }

  ngOnInit(): void {

    this.mealService.list().subscribe((meals) => {
      if (meals == null) {
        this.meals = [];
      } else {
        this.meals = meals;
      }
    });
  }
  formatDate(date: Date): string {
    return moment(date).locale('en').format('LLL')
  }
}
