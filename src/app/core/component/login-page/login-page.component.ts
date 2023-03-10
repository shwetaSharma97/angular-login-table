import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userName: any = '';
  password: any = '';
  showError = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    if (!this.password || !this.userName) {
      return
    }
    this.showError = false;
    if (this.password === 'Dummy@123' && this.userName === 'demo') {
      this.router.navigate(['data-table'])
    } else {
      this.showError = true;
    }
  }
}
