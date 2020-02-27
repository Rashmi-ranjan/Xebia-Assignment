import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AdminService {

 baseUrl = environment.backendBaseUrl;

  constructor(private httpClient:HttpClient) { }


  login(dataToPass){

    return this.httpClient.post(this.baseUrl+ "/login",dataToPass,httpOptions);

  }
  getPeoplesRequest(){
    return this.httpClient.post(this.baseUrl + "people", httpOptions);
  }


}
