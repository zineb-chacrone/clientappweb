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
        if(this.compte.length==0){
      this.msg="veuillez entrer votre nom "
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
