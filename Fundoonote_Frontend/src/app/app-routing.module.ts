import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';

const routes: Routes = [
  {path:"register", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"resetpassword", component:ResetPasswordComponent},
  {path:"home",component:DashboardComponent,
  children:[
    {path:"",redirectTo:"/home/notes",pathMatch:'full'},
    {path:"notes", component:GetAllNotesComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
