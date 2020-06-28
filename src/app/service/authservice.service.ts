import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  constructor(private http: HttpClient) {}
  authenticationService(username, password) {

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password),
    });
    return this.http
      .get<any>(
        'http://localhost:8085/clients/search/findByUsername?username=' + username,
        { headers }
      )
      .pipe(
        map((userData) => {
       
          sessionStorage.setItem('username', username);
          console.log(userData.role);
          sessionStorage.setItem('role', userData.role);
          sessionStorage.setItem('cin', userData.cin);
          sessionStorage.setItem('nom' , userData.nom);
          sessionStorage.setItem('prenom',userData.prenom);
          sessionStorage.setItem('phone',userData.phone);
          sessionStorage.setItem('email', userData.email);

          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        })
      );
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('basicauth');
  }
}
/*
  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

   // BASE_PATH: 'http://localhost:8080'
   USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

   public username: String;
   public password: String;
 
   constructor(private http: HttpClient) {
 
   }
   authenticate(username,password){
     this.username=username;
     this.password=password;
     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get('http://localhost:8085/client',{headers});

   }
   isUserLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return false
    return true
  }
  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }
  etLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
}
   authenticationService(username: String, password: String) {
     return this.http.get(`http://localhost:8085/login`,
       { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
         this.username = username;
         this.password = password;
         this.registerSuccessfulLogin(username, password);
       }));
   }
 
   createBasicAuthToken(username: String, password: String) {
     return 'Basic ' + window.btoa(username + ":" + password)
   }
 
   registerSuccessfulLogin(username, password) {
     sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
   }
 
   logout() {
     sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
     this.username = null;
     this.password = null;
   }
 
   isUserLoggedIn() {
     let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
     if (user === null) return false
     return true
   }
 
   getLoggedInUserName() {
     let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
     if (user === null) return ''
     return user
   }*/
