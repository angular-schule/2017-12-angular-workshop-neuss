import { ResizeService } from './shared/resize.service';
import { ErrorDisplayService } from './shared/error-display.service';
import { ErrorInterceptor } from './shared/error-interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { TestPipe } from './shared/test.pipe';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookStoreService } from './shared/book-store.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    TestPipe,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    ErrorDisplayService,
    ResizeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
