import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("LoggedInUser")
  })
};

@Injectable({
  providedIn: "root"
})
export class AdminServService {
  baseUrl = environment.backendBaseUrl;
  token: any;

  constructor(private http: HttpClient) {}

  private headerText = new BehaviorSubject<string>("");

  // Initialize with emtpy string
  private headerResponse = new BehaviorSubject<boolean>(true);

  // private dialogResponse = new BehaviorSubject<boolean>();

  // setDialogResponse(data: boolean) {
  //   // Fire the update event with the new data
  //   this.dialogResponse.next(data);
  // }

  // getDialogResponse(): Observable<boolean> {
  //   return this.dialogResponse.asObservable();
  // }

  setHeaderResponse(data: boolean) {
    // Fire the update event with the new data
    this.headerResponse.next(data);
  }

  getHeaderResponse(): Observable<boolean> {
    return this.headerResponse.asObservable();
  }

  setHeaderText(data: string) {
    // Fire the update event with the new data
    this.headerText.next(data);
  }

  getHeaderText(): Observable<string> {
    return this.headerText.asObservable();
  }

  getPlanetsRequest() {
    return this.http.get(this.baseUrl + "planets");
  }



  

  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message|| "Server Error");
  // }
}
