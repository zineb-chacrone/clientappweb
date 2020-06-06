import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  todayDate : Date = new Date();
  headers = ["Date","Opération","Destinataire", "Montant"];
  constructor() { }

  ngOnInit(): void {
  }

  rows = [
    {
      "Date" : "10-02-2020",
      "Opération":"Virement",
      "Destinataire" : "Sanae Alaoui",
      "Montant":"3000dhs",
      
      
     
    },
    {
      "Date" : "25-12-2019",
      "Opération":"Virement" ,
      "Destinataire" : "Rania Mouali",
      "Montant":"2000dh",
    },
  ]

}
