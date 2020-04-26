import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  compte=""
  tel=""

  constructor() { }

  ngOnInit(): void {

  }
  onClick(){
    console.log("compte :",this.compte,this.tel);
  }
}
