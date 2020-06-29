import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { lavender } from 'color-name';
import { Compte } from '../compte.model';
import {ClientdataService} from '../service/clientdata.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-solde',
  templateUrl: './solde.component.html',
  styleUrls: ['./solde.component.css']
})
export class SoldeComponent implements OnInit {
  acount:any;
  compte: Compte;
  sold: string="";
  todayDate : Date = new Date();
constructor(private data:ClientdataService) {
}
  ngOnInit(): void {
    this.data.getComptes(localStorage.getItem('id'))
      .subscribe(data=>{
        this.acount=data;
      })

  }

  showPrice(value)
  {
    console.log(value);
    this.sold=value;
  }

}
