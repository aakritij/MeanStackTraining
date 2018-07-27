
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const appRounting = RouterModule.forRoot([
 {path:'', component:LoginComponent}, 
 {path:'registration', component:RegistrationComponent}

])