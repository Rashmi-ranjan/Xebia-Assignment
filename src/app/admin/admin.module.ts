import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminloginComponent } from "./adminlogin/adminlogin.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { HeaderComponent } from "./admin-dashboard/header/header.component";
import { DashboardComponent } from "./admin-dashboard/dashboard/dashboard.component";
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { FooterComponent } from './admin-dashboard/footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminDashboardComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    Ng2SearchPipeModule,
  ],
  
})
export class AdminModule {}
