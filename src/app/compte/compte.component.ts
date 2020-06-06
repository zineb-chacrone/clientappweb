import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  todayDate : Date = new Date();
  headers = ["Id", "N° du compte ","Type de compte","Montant","Etat"];
  constructor(private route:Router,) { }

  ngOnInit(): void {
  }

  rows = [
    {
      "Id" : "1",
      "N° du compte" : "2361498625362232",
      "Type de compte" : "Etudiant",
      "Montant" : "2000dhs",
      
      "Etat" : "Active",
      
    },
    {
      "Id" : "2",
      "N° du compte" : "236149864612232",
      "Type de compte" : "Personnel",
      "Montant" : "5000dhs",
      
      "Etat" : "Active",
    },
  ]
}

















  

