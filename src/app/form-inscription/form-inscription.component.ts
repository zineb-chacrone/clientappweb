import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import {User} from '../user'
import { from } from 'rxjs';

@Component({
  selector: 'form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css'],
})
export class FormInscriptionComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb : FormBuilder) { }

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

}
