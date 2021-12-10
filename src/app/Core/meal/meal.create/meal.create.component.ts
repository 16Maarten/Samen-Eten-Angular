import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Studenthome } from '../../studenthome/studenthome.model';
import { StudenthomeService } from '../../studenthome/studenthome.service';
import { AuthenticationService } from '../../user/authentication.service';
import { Meal } from '../meal.model';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal.create',
  templateUrl: './meal.create.component.html',
  styleUrls: ['./meal.create.component.css']
})
export class MealCreateComponent implements OnInit {
  studenthomes: Studenthome[] = [];
  ingredientsList: string
  public studenthome: Studenthome = {
    _id : "",
    name : "",
    streetName : "",
    postalCode : "",
    houseNumber : 0,
    residence : "",
    phoneNumber : "",
    owner : ""
  };
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

  constructor(private route: ActivatedRoute, private router: Router, private studenthomeService: StudenthomeService, private mealService: MealService, private authenticationService: AuthenticationService) 
  { this.ingredientsList = ""}

  ngOnInit(): void {
    
    this.studenthomeService.list().subscribe((studenthomes) => {
      if (studenthomes == null) {
        this.studenthomes = [];
      } else {
        this.studenthomes = studenthomes;
      }
    })
    this.authenticationService.currentUser$.subscribe((user) => {
      if (user._id != undefined) {
        this.meal.organizer = user._id.toString();
      }
    })
  }

  onSubmit() {
    let ingredientsArray = this.ingredientsList?.split(',')
    this.meal.ingredients = ingredientsArray
    this.mealService.create(this.meal).subscribe(() => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }
}
