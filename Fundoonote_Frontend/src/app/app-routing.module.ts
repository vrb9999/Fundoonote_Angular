import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { AuthenticationGuard } from './authGuard/authentication.guard';
import { EditNotesComponent } from './components/edit-notes/edit-notes.component';

const routes: Routes = [
  {path:"register", component:RegistrationComponent},
  {path:"login", component:LoginComponent},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"resetpassword", component:ResetPasswordComponent},
  {path:"dashboard",component:DashboardComponent, canActivate:[AuthenticationGuard],
    children:[
      {path:"",redirectTo:"/dashboard/notes",pathMatch:'full'},
      {path:"notes", component:GetAllNotesComponent},
      {path:"trash", component:TrashNotesComponent},
      {path:"archive", component:ArchiveNotesComponent},
      {path:"update",component:EditNotesComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
