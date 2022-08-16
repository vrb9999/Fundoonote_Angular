import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/Auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authguard: AuthenticationService, private router: Router) {}
  
  canActivate(): boolean {
    if(!this.authguard.getToken()){
      this.router.navigateByUrl("/login");
    }
    return true;
  }
  
}
