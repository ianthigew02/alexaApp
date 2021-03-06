import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentUser: any;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  } 

  ngOnInit(): void {


  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
