import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthserviceService } from '../service/authservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
username: string;
password:string;
errorMessage:'Invalid Credentials';
successMessage:string;
invalidLogin =false;
loginSuccess = false;
  
  constructor(private router: Router, private http:HttpClient,
    private formBuilder: FormBuilder, 
    private route :ActivatedRoute,
    private authentificationService: AuthserviceService) { }

  ngOnInit(): void {
 this.loginForm = this.formBuilder.group({
   username: ['',Validators.required],
   password: ['',Validators.required]

 });}
 
get f(){
  return this.loginForm.controls;
}
onSubmit(){

  console.log(this.f.username.value);
  console.log(this.f.password.value);
      this.authentificationService.authenticationService(this.f.username.value, this.f.password.value).subscribe((result)=> {
        this.invalidLogin = false;
        this.loginSuccess = true;
console.log(result);
        this.successMessage = 'Login Successful.';
        this.router.navigate(['/client']);
      }, () => {
        this.invalidLogin = true;
        this.loginSuccess = false;
      });

      this.http.get('http://localhost:8085/clients/search/findByUsername?username='+this.f.username.value)
      .subscribe(result=>{
        console.log(result)
      },error => {
        console.log(error)
      })


    }



}
 

/*
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
     this.authentificationService.authenticate(this.f.username.value, this.f.password.value).subscribe((result)=> {
    this.invalidLogin = false;
    this.loginSuccess = true;
    
    this.successMessage = 'Login Successful.';
    this.router.navigate(['/client']);
  }, () => {
    this.invalidLogin = true;
    this.loginSuccess = false;
  }); 
  
     
  }
    gotoform(){
      this.router.navigate(['/inscription']);
    }
    gotoforgot(){
      this.router.navigate(['/forgot'])
    }*/
  
