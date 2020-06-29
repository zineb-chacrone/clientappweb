import { Injectable, ɵConsole } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Client';
import { compte } from '../compte';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientdataService {
 // url:string="http://localhost:8085/client";
  private nom: string;
  private prenom: string;
  private cin: string;
  private phone: string;
  private email: string;
clientId;
  constructor(private auth: AuthserviceService , private http: HttpClient)
  {  }
public goprofile(id){
return this.http.get('http://localhost:8085/clients/'+id);

}

public getComptes(id){
    return this.http.get("http://localhost:8085/clients/"+id+"/comptes");
  }
public postvirement(id,virement){
  return this.http.post("http://localhost:8085/client/ListComptes/"+id+"/EffectuerVirement",virement);

  }

  public getAllVirement(id){
    return this.http.get("http://localhost:8085/clients/"+id+"/virements");
  }

}
