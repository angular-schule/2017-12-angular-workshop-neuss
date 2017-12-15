import { Observable } from 'rxjs/Observable';
import { EventManager } from '@angular/platform-browser';
import { Injectable, EventEmitter } from '@angular/core';
import { startWith, debounceTime } from 'rxjs/operators';

export interface Size {
  innerWidth: number;
  innerHeight: number;
}

@Injectable()
export class ResizeService {

  public get onResize$() {
    return this.tmp$.pipe(
      // debounceTime(100),
      startWith(typeof(window) !== 'undefined' ? window : {
        innerWidth: 1024,
        innerHeight: 680
      })
    );
  }
  private tmp$ = new EventEmitter<Size>();

  constructor(eventManager: EventManager) {

    eventManager.addGlobalEventListener('window', 'resize',
      e => this.tmp$.next(e.target));
  }
}
