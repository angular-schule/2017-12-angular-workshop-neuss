import { Book } from './../shared/book';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  book = Book.empty();

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }
}
