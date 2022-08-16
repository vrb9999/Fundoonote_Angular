import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerForm.value);
    let reqdata = {
      Email: this.registerForm.value.email,
      Password: this.registerForm.value.password
    }

    this.user.login(reqdata).subscribe((response: any) => {
      console.log(response,"This is from login componenet");
      localStorage.setItem("token",response.data);
      if(localStorage.getItem('token') == null){
        this.router.navigate(['/login']);
      }
      else{
        this.router.navigate(['/dashboard'])
        this.snackbar.open("Login Successfull...","",{
          duration:2000,
        });
      }
    })
  }
}
