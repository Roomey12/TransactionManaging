import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }
  // Method for checking users permissions
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null){
      let roles = next.data['permittedRoles'] as Array<string>;
      if(roles){
        if(this.authService.roleMatch(roles)){
          return true;
        }
        else{
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}