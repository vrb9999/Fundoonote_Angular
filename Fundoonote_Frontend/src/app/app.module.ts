import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthenticationService } from './services/Auth/authentication.service';

import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons.component';
import { TrashNotesComponent } from './components/trash-notes/trash-notes.component';
import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
import { EditNotesComponent } from './components/edit-notes/edit-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    CreateNotesComponent,
    DisplayNotesComponent,
    GetAllNotesComponent,
    IconsComponent,
    TrashNotesComponent,
    ArchiveNotesComponent,
    EditNotesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, 
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatDividerModule, MatCheckboxModule, FormsModule,
    ReactiveFormsModule, MatSelectModule, HttpClientModule,
    MatSidenavModule, MatIconModule, MatToolbarModule,
    MatListModule, MatCardModule, MatMenuModule,
    MatDialogModule, MatSnackBarModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
