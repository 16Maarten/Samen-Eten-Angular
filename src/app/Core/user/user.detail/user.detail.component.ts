import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-detail',
  templateUrl: './user.detail.component.html',
})
export class UserDetailComponent implements OnInit {
  userId: string | null = null;
  user: User | null = null;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = params.get('id');
      this.user = this.userService.getUserById(Number(this.userId));
    });
  }

}
