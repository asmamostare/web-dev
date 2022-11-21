import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {ShowAllComponent} from "./show-all/show-all.component";

const routes: Routes = [
  {path:"add",component:AddComponent},
  {path:"home",component:HomeComponent},
  {path:"search",component:SearchComponent},
  {path:"search",component:SearchComponent},
  {path:"show-all",component:ShowAllComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
