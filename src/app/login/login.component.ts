import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public compte="";
  public password="";
  public msg="";
 
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    console.log("welcome ");
    if(this.compte==""||this.password =="" ){
      this.msg="veuillez remplire tous les champs"
    }
    if(this.compte.length!=7){
      this.msg="veuillez entrer les 7 premiers chiffre de votre numero de compte"
    }
    console.log(this.compte,this.password);
    }
}
