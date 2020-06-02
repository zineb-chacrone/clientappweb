import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { lavender } from 'color-name';
import { Compte } from '../compte.model';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {
  acount: Compte[] =[
    {id:4512345 , solde: '30000 Dh'},
    {id:6758940 ,solde:'12300 Dh'},
    {id:1945630 ,solde:'56300 Dh'}

  ];
  compte: Compte;
  sold: string="";
  todayDate : Date = new Date();

  ngOnInit(): void {
    
  }

  showPrice(value)
  {
    console.log(value);
    this.sold=value;
  }

}
