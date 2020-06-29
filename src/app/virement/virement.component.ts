import { Component, OnInit } from '@angular/core';
import {ClientdataService} from '../service/clientdata.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
  acount: any;
comptebenif;
comptemmet;
sold;
  formvirrment: FormGroup;

  constructor(private data_client:ClientdataService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.formvirrment =this.formBuilder.group({
      numcomptebenf: ['',Validators.required],
      montant: ['',Validators.required],
      type:'Virement'

    });
    this.data_client.getComptes(localStorage.getItem('id'))
      .subscribe(data=>{
        this.acount=data
      })
  }
  showPrice(value)
  {
    console.log(value);
    this.sold=value;
  }

  onVirer() {
    this.data_client.postvirement(this.comptemmet,this.formvirrment.value)
      .subscribe(data=>{
        console.log(data)
      })
  }
}
