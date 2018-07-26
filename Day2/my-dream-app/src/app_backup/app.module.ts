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
import { ColourChanger } from './colorchanger.directive';

@NgModule({
  declarations: [
    AppComponent, MyComp, HeaderComp, FooterComp, UsercompComponent, DeptcompComponent, AssignmentComponent, SummaryDemo, ColourChanger
  ],
  imports: [
    BrowserModule, FormsModule, ChildModule
  ],
  providers: [],
  bootstrap: [AppComponent, MyComp]
})
export class AppModule { }