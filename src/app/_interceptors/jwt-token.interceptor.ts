import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

@Injectable()
export class JwtTokenInterceptor {}/*implements HttpInterceptor {
  // https://angular-academy.com/angular-jwt/
  constructor(public authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    if (this.authService.getJwtToken()) {
      request = this.addToken(request, this.authService.getJwtToken());
    }

    return next.handle(request).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse && error.status === 401) {
        return this.handle401Error(request, next);
      } else {
        return throwError(error);
      }
    }));
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
        this.isRefreshing = true;
        this.refreshTokenSubject.next(null);

        return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.jwt);
            return next.handle(this.addToken(request, token.jwt));
        }));

    } else {
        return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
            return next.handle(this.addToken(request, jwt));
        }));
    }
    }
}*/