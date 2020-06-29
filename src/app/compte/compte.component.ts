import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientdataService } from '../service/clientdata.service';
import { error } from '@angular/compiler/src/util';
import {compte} from '../compte';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  todayDate : Date = new Date();
  headers = [ "N° du compte ","Type de compte","Solde"];
  rows: any;
  constructor(private route:Router,private client_data:ClientdataService) { }

  ngOnInit(): void {
    console.log('hani'+this.client_data.clientId)
    this.client_data.getComptes(localStorage.getItem('id'))
    .subscribe(data=>{
console.log(data)
      this.rows= data;


    },error=>{
      console.log('hello'+error)
    }
    )


  }


}



















