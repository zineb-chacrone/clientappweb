import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import {User} from '../user'
import { from } from 'rxjs';
import { throttle } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css'],
})
export class FormInscriptionComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb : FormBuilder,private route: Router) { }

  ngOnInit(): void {
  this.signupForm=this.fb.group({
    Nom: [],
    prenom: [],
    email: [],
    numcompt: [],
    datedenai: [],
    numtel: [],
    password: [],    

  });
  } 

  signup(){
    console.log('Données de formulaire ...',this.signupForm.value);
  }
  gotologin(){
    this.route.navigate(['/login']);
  }

}
