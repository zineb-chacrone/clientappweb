import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root-nav',
  templateUrl: './root-nav.component.html',
  styleUrls: ['./root-nav.component.css'],

})
export class RootNavComponent {
  Nom:string="zineb chacrone";
  cin:string = "AL12345";
  Datedenaissance:string ="31-01-1999";
  numtel:string="0643434343";
  email:string="chacrone.zineb@gmail.com";
  numcompte:string="4787878787878787";
  datedajout:string="08-04-2017";
  position:string;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) {}
  ngOnInit(): void {
    this.position=this.router.url;
    
  }

}
