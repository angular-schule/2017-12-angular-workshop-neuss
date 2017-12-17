import { TokenInterceptor } from './shared/token.interceptor';
import { AuthService } from './shared/auth.service';
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
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookComponent,
    TestPipe,
    CreateBookComponent,
    BookDetailsComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ErrorDisplayService,
    ResizeService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
