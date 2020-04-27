import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public compte="";
  public password="";
  public msg="";
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onClick(){
    if(this.password =="" ){
      this.msg="veuillez remplire tous les champs"
    }else{
        if(this.compte.length!=7){
      this.msg="veuillez entrer les 7 premiers chiffre de votre numero de compte"
    }else{
    console.log(this.compte,this.password);
    this.router.navigate(['/client']);
  }
    }
  
     
  }
    gotoform(){
      this.router.navigate(['/inscription']);
    }
    gotoforgot(){
      this.router.navigate(['/forgot'])
    }
}
