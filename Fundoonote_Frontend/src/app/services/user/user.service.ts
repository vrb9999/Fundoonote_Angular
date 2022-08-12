import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registration(reqdata: any)
  {
    console.log(reqdata);

    let header = {
      headers:new HttpHeaders({
        'content-type':'application/json'
      })
    }

    return this.httpService.postService('/User/AddUser',reqdata,false,header)
  }

  login(reqdata: any){
    console.log(reqdata);
    
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.postService('/User/LoginUser',reqdata,false,header)
   }

  forgotpassword(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    return this.httpService.postService(`/User/ForgetPasswordUser/${reqdata.Email}`, reqdata, false, header)
  }
}
