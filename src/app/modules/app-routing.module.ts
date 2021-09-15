import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ButtonComponent} from "../pages/body/button/button.component";
import {TableComponent} from "../pages/body/table/table.component";

const routes: Routes = [
  { path: "button", component: ButtonComponent},
  { path: "table", component: TableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
