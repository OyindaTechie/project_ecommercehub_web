import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {


  mytoken = localStorage.getItem('token');
  
  // private baseurl = 'http://127.0.0.1:8000';
  private baseurl = 'https://ecommercehubapi.steelatraktsinc.com'
  constructor(private http: HttpClient) { }

  httpOptionstoken = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept':   'application/json',
      'Authorization': 'Bearer ' + this.mytoken
    })
  };




  login(email: any, password: any) {
  
    return new Promise(resolve => {
      this.http.post(this.baseurl + '/api/userauth/login', 
      {

        "email" : email,
        "password" : password
      } , this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });

  }




  devices() {
  
    return new Promise(resolve => {
      this.http.get(this.baseurl + '/api/userauth/devices', 
    this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });

  }



  transactions() {
  
    return new Promise(resolve => {
      this.http.get(this.baseurl + '/api/userauth/transactions', 
    this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });

  }



  alltransactions() {
  
    return new Promise(resolve => {
      this.http.get(this.baseurl + '/api/userauth/alltransactions', 
    this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });

  }


  buy(id: any) {

    return new Promise(resolve => {
      this.http.post(this.baseurl + '/api/transaction/store', 
      {
        "deviceId" : id
      } , this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });


  }


  return(id: any) {

    return new Promise(resolve => {
      this.http.post(this.baseurl + '/api/transaction/return', 
      {
        "deviceId" : id
      } , this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });


  }



  signup(
    name:any,
    email:any,
    phone:any,
    address:any,
    password:any) {

    return new Promise(resolve => {
      this.http.post(this.baseurl + '/api/userauth/signup', 
      {
       
"name": name,
"email": email,
"phone": phone+'',
"address": address,
"password": password
      } , this.httpOptionstoken
      ).subscribe(data => {
        resolve(data);
      }, err => {
        // // console(err);
        return resolve(err);
      });
    });


  }



}
