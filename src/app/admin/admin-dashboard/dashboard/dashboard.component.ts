import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
// import { MatPaginator } from "@angular/material/paginator";
import { Subscription, timer, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

import { ToastrService } from "ngx-toastr";
// import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  limit: any = 0;
  
  showPlanetDetail: boolean;
  subscription: Subscription;
  
  planetRequestList: any;
  noRecordFound: boolean = false;
  initialplanetRequestList: any= [];
  term : any;
  constructor(
    private adminServ: AdminServService,
    private toastServ: ToastrService
  ) {}

  ngAfterViewInit() {
    // this.getPlanets();
  }

  ngOnInit() {
    //this.checkRequest();
    this.getPlanets();
  }
 
  
  getPlanets(){
    // let dataToPass = {
    //   pageSize: this.pageSize,
    //   page: this.page
    // };
    // this.dataDefault = dataToPass;
    this.adminServ.getPlanetsRequest().subscribe(
      data => {
        if (data['count'] > 0) {
          this.planetRequestList = data["results"];
          this.limit = data['count'];
          console.log("this.planetRequestList", this.planetRequestList)
          if (this.limit == 0 || this.planetRequestList.length === 0) {
            this.noRecordFound = true;
          } else {
            this.noRecordFound = false;
          }
        } else {
          this.toastServ.error("Failed To Fetch planet Request", "", {
            timeOut: 1000
          });
        }

        // console.log("COUNT", this.count, this.SalonRequestList);
      },
      error => {
        this.toastServ.error(
          "Failed To Fetch planet Request",
          error.error["message"],
          {
            timeOut: 1000
          }
        );
      }
    );
  }

  

 

}
