import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth.service";
import { AdminServService } from "../admin-serv.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  username: any;
  adminName: any;
  constructor( private authServ: AuthService,
    private admnServ: AdminServService
  ) { }

  ngOnInit() {
    this.getAdminName();
  }

  getAdminName() {
    this.username = sessionStorage.getItem("username");
    this.adminName = this.username.toUpperCase();
  }
}
