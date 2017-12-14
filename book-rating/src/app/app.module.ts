import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { TestPipe } from './shared/test.pipe';
import { CreateBookComponent } from './create-book/create-book.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
