import { EventManager } from '@angular/platform-browser';
import { Injectable, EventEmitter } from '@angular/core';

export interface Size {
  innerWidth: number;
  innerHeight: number;
}

@Injectable()
export class ResizeService {

  public onResize$ = new EventEmitter<Size>();

  constructor(eventManager: EventManager) {
    eventManager.addGlobalEventListener('window', 'resize',
      e => this.onResize$.next(e.target));
  }
}
