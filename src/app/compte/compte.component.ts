import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientdataService } from '../service/clientdata.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  todayDate : Date = new Date();
  headers = ["Id", "N° du compte ","Type de compte","Montant","Etat"];
  rows:any;
  constructor(private route:Router,private client_data:ClientdataService) { }

  ngOnInit(): void {
this.client_data.getComptes().subscribe(data => {
  this.rows=data;
})

  }

  
}

















  

