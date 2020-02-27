import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  {
    path: "",
    loadChildren: () =>
      import("../app/admin/admin.module").then(m => m.AdminModule)
  },
 

  { path: "**", redirectTo: "pagenotfound", pathMatch: "full" }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
