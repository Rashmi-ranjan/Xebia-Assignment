import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth.service";
import { AdminServService } from "../admin-serv.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  showLogout: boolean;
  username: any;
  adminName: any;
  isShowSelection: boolean = true;

  constructor(
    private authServ: AuthService,
    private admnServ: AdminServService
  ) { }

  ngOnInit() {
    this.getAdminName();
  }
  showSelection() {


    this.isShowSelection = !this.isShowSelection;
    this.admnServ.setHeaderResponse(this.isShowSelection);
  }
  /**
   * Function is use to Pay to show logout button
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  showLogoutButton() {
    this.showLogout = true;
  }

  /**
   * Function is use to Pay to logout admin
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  logout() {
    this.authServ.logout();
  }

  getAdminName() {
    this.username = sessionStorage.getItem("username");
    this.adminName = this.username.toUpperCase();
  }
}
