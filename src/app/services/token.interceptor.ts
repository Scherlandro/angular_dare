import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';

import { Observable, Subject, throwError } from 'rxjs';
import { TokenService } from './/token.service';
import { ApiErrorService } from './/api-error.service';
import {catchError} from "rxjs/operators";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private apiErrorService: ApiErrorService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.tokenService.getToken()
    // token para inserir no headers
    if(token !== null){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'Bearer '+token)
      })
       return next.handle(clone).pipe(
        catchError(error => {
          console.log('No catchError do Interceptor',error)

          if(error.status === 401){
            this.tokenService.clearTokenExpired()
          }

          this.apiErrorService.sendError(error.error.message)
          return throwError('Session Expired')
        }) )  }
    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}

