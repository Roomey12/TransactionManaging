import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from './services/auth.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Transactions';
  constructor(private spinner: NgxSpinnerService, private router: Router) {}
 
  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }
  
  // Method for loging out
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}
