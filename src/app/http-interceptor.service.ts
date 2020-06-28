import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthserviceService } from './service/authservice.service';


@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (
          sessionStorage.getItem('username') &&
          sessionStorage.getItem('basicauth')
        ) {
          req = req.clone({
            setHeaders: {
              Authorization: sessionStorage.getItem('basicauth'),
            },
          });
        }
    
        return next.handle(req);
      }
    
}
