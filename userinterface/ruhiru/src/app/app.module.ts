import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//material styles
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { RegisterOrgComponent } from './register-org/register-org.component';
import {MatFormFieldModule} from '@angular/material/form-field';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterOrgComponent,
    EventComponent,
    CreateEventComponent,
    ProfileComponent,
    EventComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,

    ReactiveFormsModule,
    HttpClientModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
