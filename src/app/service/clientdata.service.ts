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

public getComptes(){
  return this.http.get("http://localhost:8085/client/ListComptes")
}
  
}
