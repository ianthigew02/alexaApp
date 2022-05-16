import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from './_services/authentication.service';
import { AlertService } from './_services/alert.service'
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
