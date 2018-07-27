import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComp } from './mycomp.components';
import { HeaderComp } from './header.comp';
import { FooterComp } from './footer.comp';
import { UsercompComponent } from './usercomp/usercomp.component';
import { DeptcompComponent } from './deptcomp/deptcomp.component';
import { FormsModule } from '@angular/forms';
import { AssignmentComponent } from './assignment/assignment.component';
import { ChildModule } from './child.module';
import { SummaryDemo } from './summary.pipe';
import { LendingpageComponent } from './lendingpage/lendingpage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UseraccountComponent } from './useraccount/useraccount.component';
import { appRounting } from './app.routing';
import { childRouting } from './child.routing';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent, MyComp, HeaderComp, FooterComp, UsercompComponent, DeptcompComponent, AssignmentComponent, 
    SummaryDemo, LendingpageComponent, LoginComponent, RegistrationComponent, UserdetailsComponent, 
    UseraccountComponent
  ],
  imports: [
    BrowserModule, FormsModule, ChildModule, RouterModule, childRouting, appRounting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
