import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Likecomponent} from './likecomponent/likecomponent.component';
import { VotercomponentComponent } from './votercomponent/votercomponent.component';

@NgModule({
  declarations: [
    Likecomponent, VotercomponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  exports: [VotercomponentComponent,Likecomponent],
  providers: []
})
export class ChildModule { }
