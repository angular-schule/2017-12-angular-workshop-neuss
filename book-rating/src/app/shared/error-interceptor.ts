import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

import { ErrorDisplayService } from './error-display.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private eds: ErrorDisplayService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(err => {
        this.eds.reportError(err);
        return ErrorObservable.create(err);
      })
    );
  }
}
