// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';
  router: any;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password);
    // Redirect to the appropriate component based on the user role.
    if (this.authService.isLoggedInUser()) {
      this.router.navigate(['/user']);
    } else if (this.authService.isLoggedInAdmin()) {
      this.router.navigate(['/admin']);
    }
  }
}
