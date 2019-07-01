import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { AnonymousDetailComponent } from './anonymous/anonymous-detail/anonymous-detail.component';
import { LoginComponent } from './login/login.component';
import { DoctorLoginComponent } from './Login/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './Login/patient-login/patient-login.component';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
    HeaderComponent,
    AnonymousComponent,
    AnonymousDetailComponent,
    LoginComponent,
    DoctorLoginComponent,
    PatientLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
