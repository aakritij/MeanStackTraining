
import {RouterModule} from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UseraccountComponent } from './useraccount/useraccount.component';

export const childRouting = RouterModule.forChild([
 {path:'userdetails/:id/:action', component:UserdetailsComponent},
 {path:'useraccount', component:UseraccountComponent}

])