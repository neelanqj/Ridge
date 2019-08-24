
import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpEvent } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry ,tap, delay, catchError} from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class RetryInterceptor implements HttpInterceptor
{
  // https://stackoverflow.com/questions/49100844/angular-5-2-rxjs-5-5-httpinterceptor-retrywhen-but-update-request

  constructor(private alertify: AlertifyService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
        .pipe(
            delay(1000), 
            retry(3),
            catchError((err, caught) => {
                    console.log(err);
                    this.alertify.warning("Network interuption.");
                    return caught;
                })
            );
  }

}