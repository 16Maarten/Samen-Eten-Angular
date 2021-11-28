import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './user.create.component.html',
})
export class UserCreateComponent implements OnInit {
  id: number
  userFirstName: string
  userLastName: string
  userEmail: string
  userBirthday: Date
  userStudentNumber: number

  constructor(private userService: UserService) {
    this.id = userService.getNewId()
    this.userFirstName = ""
    this.userLastName = ""
    this.userEmail = ""
    this.userStudentNumber = 0;
    this.userBirthday = new Date()
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    let newUser: User = {
      id: this.id,
      firstName: this.userFirstName,
      lastName: this.userLastName,
      studentNumber: this.userStudentNumber,
      birthday: this.userBirthday,
      email: this.userEmail
    }
    this.userService.createUser(newUser)
  }

}
