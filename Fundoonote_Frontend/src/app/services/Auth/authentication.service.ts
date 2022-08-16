import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {

  constructor() { }

  getToken() {
    return !!localStorage.getItem("token");
  }
}
