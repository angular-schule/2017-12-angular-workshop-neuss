import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ErrorDisplayService {

  lastError$ = new EventEmitter<string>();

  reportError(error: any) {
    const message = error.message ? error.message : 'unknown error';
    this.lastError$.emit(message);

    setTimeout(() => this.lastError$.emit(null), 3000);
  }
}
