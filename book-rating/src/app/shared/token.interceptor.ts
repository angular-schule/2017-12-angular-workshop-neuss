import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';


import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const waitForToken$ = this.authService.getToken$();
    return waitForToken$.pipe(
      switchMap(token => {
        const authRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });

        return next.handle(authRequest);
      })
    );
  }
}
