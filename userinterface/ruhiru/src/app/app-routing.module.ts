import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterOrgComponent } from './register-org/register-org.component';
import { ProfileComponent } from './profile/profile.component';
import {EventComponent} from './event/event.component'
import {CreateEventComponent} from './create-event/create-event.component'
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerOrg', component: RegisterOrgComponent },
  { path: 'event', component: EventComponent ,canActivate: [YourGuardGuard]},
  { path: 'createevent', component: CreateEventComponent ,canActivate: [YourGuardGuard]},
  { path: 'profile', component: ProfileComponent,canActivate: [YourGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
