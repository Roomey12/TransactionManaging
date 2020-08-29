import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

// Service for working with authorization and authentication
@Injectable()
export class AuthService {

  private authUrl = environment.apiUrl + 'auth/';

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  // Model for validation data for registration
  formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', [Validators.email, Validators.required]],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(6)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords })
  });

  // Http request for registrating user
  register() {
      var body = {
        UserName: this.formModel.value.UserName,
        Email: this.formModel.value.Email,
        Password: this.formModel.value.Passwords.Password
      };
      return this.http.post(this.authUrl + 'register', body);
  }
  
  // Http request for authenticating user
  login(formData) {
      return this.http.post(this.authUrl + 'login', formData);
  }

  // Method for comparing passwords
  comparePasswords(fb: FormGroup) {
      let confirmPswrdCtrl = fb.get('ConfirmPassword');
      if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
        if (fb.get('Password').value != confirmPswrdCtrl.value)
          confirmPswrdCtrl.setErrors({ passwordMismatch: true });
        else
          confirmPswrdCtrl.setErrors(null);
      }
  }

  // Method for matching users role
  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
    var userRole = payLoad.role;
    allowedRoles.forEach(element => {
      if (userRole == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
 
  // Method for getting users profile
  getUserProfile(){
    return this.http.get(this.authUrl + 'profile');
  }
}