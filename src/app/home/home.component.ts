import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService,private authenticationService: AuthenticationService,
    ) { this.currentUser = this.authenticationService.currentUserValue;}

  ngOnInit(): void {
    
   
  }
}
