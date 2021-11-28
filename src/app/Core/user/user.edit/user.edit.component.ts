import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './user.edit.component.html',
})
export class UserEditComponent implements OnInit {
  userId: string | null = null;
  user: User | null = null;

  userFirstName: string
  userLastName: string
  userEmail: string

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.userFirstName = ""
    this.userLastName = ""
    this.userEmail = ""
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      this.user = this.userService.getUserById(Number(this.userId));
    });
  }

  onSubmit(): void {
    let newUser: User = {
      id: this.user?.id  || 0,
      firstName: this.userFirstName,
      lastName: this.userLastName,
      studentNumber: this.user?.studentNumber || 0,
      birthday: this.user?.birthday || new Date(),
      email: this.userEmail
    }
    this.userService.updateUser(newUser)
  }

}
