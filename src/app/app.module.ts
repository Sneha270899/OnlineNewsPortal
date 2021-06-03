import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaidComponent} from './paid/paid.component';
import { SignupFormComponent} from './signup-form/signup-form.component';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ReformComponent } from './reform/reform.component';
import { ChangeFormComponent } from './change-form/change-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaidComponent,
    SignupFormComponent,
    LoginComponent,
    ReformComponent,
    ChangeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
