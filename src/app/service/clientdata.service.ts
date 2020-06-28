import { Injectable, ɵConsole } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Client';

@Injectable({
  providedIn: 'root'
})
export class ClientdataService {
 // url:string="http://localhost:8085/client";
  private nom:string;
  private prenom:string;
  private cin:string;
  private phone:string;
  private email:string;
  
  constructor(private auth:AuthserviceService,private http:HttpClient)
  {  }
public goprofile(){
return this.http.get("http://localhost:8085/client");
  
}

  getnom(): string {
    return this.nom;
  }
  
  setnom(value: string) {
    this.nom = value;
  }

  getprenom(): string {
    return this.prenom;
  }

  setprenom(value: string) {
    this.prenom = value;
  }

  getcin(): string {
    return this.cin;
  }

  setcin(value: string) {
    this.cin = value;
  }

  getphone(): string {
    return this.phone;
  }

  setphone(value: string) {
    this.phone = value;
  }

  getemail(): string {
    return this.email;
  }

  setemail(value: string) {
    this.email = value;
  }
  
}
