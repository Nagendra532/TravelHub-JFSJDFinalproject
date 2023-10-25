import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private isLoggedIn = false;
  private isAdmin = false;

  login(username: string, password: string) {
    // Implement your authentication logic here, e.g., check username and password.
    // For simplicity, a hardcoded example is shown.
    if (username === 'u' && password === 'u') {
      this.isLoggedIn = true;
    } else if (username === 'a' && password === 'a') {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  isLoggedInUser() {
    return this.isLoggedIn && !this.isAdmin;
  }

  isLoggedInAdmin() {
    return this.isLoggedIn && this.isAdmin;
  }

  // Public method to access isLoggedIn property
  getIsLoggedIn() {
    return this.isLoggedIn;
  }
}


