import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RegistrationComponent} from "./registration/registration.component";
import {SearchDeleteComponent} from "./search-delete/search-delete.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {EditComponent} from "./edit/edit.component";

const  routes: Routes = [
 /* {path: "", redirectTo: "users",pathMatch: "full"},*/
  {path: "", component:HomeComponent},
  {path: "users", component: RegistrationComponent},
  {path: "search", component: SearchDeleteComponent},
  {path: "edit/:id", component: EditComponent},

]


@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
