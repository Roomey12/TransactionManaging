import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  // Method for submitting authentication data
  onSubmit(form: NgForm) {
    this.authService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.error == "Username or password is incorrect"){
          this.toastr.error('Username or password is incorrect.', 'Authentication failed.');
        }
        else{
          this.toastr.error('Something went wrong.', 'Authentication failed.');
        }
      }
    );
  }

  // Method for showing or hidding password
  show_hide_password(){
    var input = document.getElementById('password-input');
    var eye = document.getElementById('passeye');
    if (input.getAttribute('type') == 'password') {
      eye.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
      eye.classList.remove('view');
      input.setAttribute('type', 'password');
    }
    return false;
  }
}