import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminloginComponent } from "./adminlogin/adminlogin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthService } from "../admin/auth.service";
import { AuthGuard } from "../admin/auth.guard";
import { DashboardComponent } from "./admin-dashboard/dashboard/dashboard.component";

// const routes: Routes = [{path:'',component:AdminloginComponent},

// {path:'home',component:AdminDashboardComponent,canActivate:[AuthGuard],children: [{path:'userlist',loadChildren:() => import('../admin/admin-dashboard/users-list/users-list.module').then(m=>m.UsersListModule)},
// {path:'salonlist',loadChildren:() => import('../admin/admin-dashboard/salons-list/salons-list.module').then(m=>m.SalonsListModule)},
// {path:'',redirectTo:'salonlist',pathMatch:'full'}]}

// ];
const routes: Routes = [
  { path: "", component: AdminloginComponent },

  {
    path: "home",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      
      { path: "dashboard", component: DashboardComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthService, AuthGuard],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
