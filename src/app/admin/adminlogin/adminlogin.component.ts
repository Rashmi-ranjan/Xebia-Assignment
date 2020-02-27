import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AdminService } from "./admin.service";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { AllservService } from "src/app/allserv.service";

@Component({
  selector: "app-adminlogin",
  templateUrl: "./adminlogin.component.html",
  styleUrls: ["./adminlogin.component.scss"]
})
export class AdminloginComponent implements OnInit {
  // namePattern = "[a-zA-Z ]*";
  
  adminLogin: FormGroup;
  userDataBase : any = [];
  
  noRecordFound : boolean;
  constructor(
    private toastServ: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private adminServ: AdminService,
    private authServ: AuthService,
    private allServ: AllservService
  ) {}

  ngOnInit() {
    this.getPeoples();
    this.adminLogin = this.fb.group({
      name: ["", [Validators.required]],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])
      ]
    });

    this.allServ.setRoute(this.router.url);
  }
 
  get password() {
    return this.adminLogin.get("password");
  }
  get name() {
    return this.adminLogin.get("name");
  }

  
  /**
   * Function is use to login Admin
   * @access private
   * @return json
   * Created by SmartData
   * @smartData Enterprises (I) Ltd
   */
  generateRandomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
     
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
     
    return text;
  }
  getPeoples(){
    
    this.adminServ.getPeoplesRequest().subscribe(
      data => {
        if (data['count'] > 0) {
          this.userDataBase = data["results"];
          // console.log("this.userDataBase", this.userDataBase);
         
          if (this.userDataBase.length === 0) {
            this.noRecordFound = true;
          } else {
            this.noRecordFound = false;
          }
        } else {
          this.toastServ.error("Failed To Fetch People Request", "", {
            timeOut: 1000
          });
        }

        // console.log("COUNT", this.count, this.SalonRequestList);
      },
      error => {
        this.toastServ.error(
          "Failed To Fetch People Request",
          error.error["message"],
          {
            timeOut: 1000
          }
        );
      }
    );
  }

  loginAdmin(data) {
    var dataToPass = {
      name: data.name,
      password: data.password,
    };
    const result = this.userDataBase.filter(f=>
          f.name === dataToPass.name &&
          f.birth_year === dataToPass.password
        );
    // console.log("result.length", result.length);
    if(result.length > 0){
      let tokenData = this.generateRandomString(125);
      this.toastServ.success("Logged In Successfully", "", {
        timeOut: 3000
      });
      // console.log("tokenData",tokenData); return;
      sessionStorage.setItem("username", data.name);
      sessionStorage.setItem("password", data.password);
      this.authServ.sendToken(tokenData);
      this.router.navigate(["home"]);
    }else{
      this.toastServ.error("Invalid Login details", "", {
                timeOut: 3000
              });
    } 
    // this.adminServ.login(dataToPass).subscribe(
    //   (data: any) => {
    //     if (data.code === 200) {
    //       this.toastServ.success("Logged In Successfully", "", {
    //         timeOut: 3000
    //       });

    //       sessionStorage.setItem("userDetails", data["data"]["userInfo"].email);

    //       this.authServ.sendToken(data.data.token);

    //       this.router.navigate(["admin/home"]);
    //     } else {
    //       this.toastServ.error("Invalid Login details", "", {
    //         timeOut: 3000
    //       });
    //     }
    //   },
    //   error => {
    //     this.toastServ.error("Failed to Login", error.error["message"], {
    //       timeOut: 3000
    //     });
    //   }
    // );
  }


}
