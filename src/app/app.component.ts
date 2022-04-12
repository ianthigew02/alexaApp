import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  bg:any;


  constructor(private tokenStorageService: TokenStorageService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
    this.bg = this.sanitizer.bypassSecurityTrustStyle('linear-gradient(#333333, #000000)');

  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
