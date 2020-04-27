import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { lavender } from 'color-name';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {
ladate =new Date();
msg=""+ this.ladate.getDate()  + "-" + this.ladate.getMonth() + "-" + this.ladate.getFullYear() ;
num="";
nom="";
solde=0;
  ngOnInit(): void {
    console.log(this.ladate);
  }

}
