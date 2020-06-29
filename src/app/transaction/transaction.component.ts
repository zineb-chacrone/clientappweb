import { Component, OnInit } from '@angular/core';
import {ClientdataService} from '../service/clientdata.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  todayDate : Date = new Date();
  rows;

  headers = ["Opération","Numero Compte  du destinataire", "Montant"];
  constructor(private data_client:ClientdataService) { }

  ngOnInit(): void {
    this.data_client.getAllVirement(localStorage.getItem("id"))
      .subscribe(data=>{
        this.rows=data;
      })
  }



}
