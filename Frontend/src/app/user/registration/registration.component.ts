import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public authService: AuthService, private toastr: ToastrService) { }
  pas1: string = "password";
  pas2: string = "confirmPassword";

  ngOnInit() {
    this.authService.formModel.reset(); 
  }

  // Method for submitting registration data
  onSubmit() {
    this.authService.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.authService.formModel.reset();
          this.toastr.success('Now you can sign in.','Registration passed succesfully!')
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Login is already taken.','Registration failed.');
                break;
              default:
                this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
        this.toastr.error('Something went wrong.', 'Registration failed.');
      }
    );
  }

  // Method for showing or hidding password
  show_hide_password(el){
    if(el == "password"){
      var input = document.getElementById('password-input');
      var eye = document.getElementById('passeye');
    }
    else{
      var input = document.getElementById('confirm-password-input');
      var eye = document.getElementById('confirm-passeye');
    }
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