import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientdataService } from '../service/clientdata.service';


@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css'],

})
export class RootNavComponent {
  Nom:string;
  Prenom:string;
  cin:string;
  numtel:string;
  email:string;
  position:string;
  client:any;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router,private client_data:ClientdataService) {}
  ngOnInit(): void {
    this.position=this.router.url;
    this.client_data.goprofile().subscribe(data => {
    
       this.client=data;
    
      
       
    },
     error => console.log(error)
    
    )

    this.Nom=sessionStorage.getItem('nom');
    this.Prenom=sessionStorage.getItem('prenom');
    this.cin=sessionStorage.getItem('cin');
    this.numtel=sessionStorage.getItem('phone');
    this.email=sessionStorage.getItem('email');
    
    
    console.log(this.Nom);
  

  }
  
  

}
