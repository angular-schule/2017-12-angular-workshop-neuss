import { ResizeService } from './shared/resize.service';
import { Component } from '@angular/core';

import { ErrorDisplayService } from './shared/error-display.service';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(
    public eds: ErrorDisplayService,
    public rs: ResizeService) {
    console.log('Hallo');
  }
}
