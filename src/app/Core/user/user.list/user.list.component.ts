import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-list',
  templateUrl: './user.list.component.html',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  onDelete(id: number): void {
    this.userService.removeUser(id)
  }

}
