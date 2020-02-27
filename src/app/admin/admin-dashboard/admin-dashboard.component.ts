import { Component, OnInit } from "@angular/core";
import { AdminServService } from "./admin-serv.service";
// import { AuthService } from "src/app/salon/auth.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"]
})
export class AdminDashboardComponent implements OnInit {
  isSelectorShown: boolean = true;
  username: any;
  
  adminName: any;
  constructor(
    private adminServ: AdminServService,
    // private authServ: AuthService
  ) {}

  ngOnInit() {
    // this.adminServ.getHeaderResponse().subscribe((data: any) => {
    //   this.isSelectorShown = !data;

    //   this.isSelectorShown = !this.isSelectorShown;
    // });
    this.getAdminName();
  }

  getAdminName() {
    this.username = sessionStorage.getItem("username");
    this.adminName = this.username.toUpperCase();
  }
  logout() {
    // this.authServ.logout();
  }
  hideMenu() {
    this.isSelectorShown = true;
  }
  
}
