import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServiceService implements CanActivate{

  constructor(private router :Router , private authService:AuthserviceService) { }
canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
  if (this.authService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

}
}
