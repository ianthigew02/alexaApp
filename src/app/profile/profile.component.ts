import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  users = [];

  constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
      this.loadAllUsers();
      
  }

  deleteUser(id: number) {
      this.userService.delete(id)
          .pipe(first())
          .subscribe(() => this.loadAllUsers());
  }

  private loadAllUsers() {
      this.userService.getAll()
          .pipe(first())
          //.subscribe(users => this.users = users);
  }
}
