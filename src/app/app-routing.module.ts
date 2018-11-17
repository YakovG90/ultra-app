import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MembersComponent} from "./members/members.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'character',
    component: MembersComponent

  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MembersComponent]
