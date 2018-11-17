import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MembersComponent} from "./members/members.component";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'character',
    component: MembersComponent

  },

];
