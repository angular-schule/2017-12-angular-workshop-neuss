import { NgForm } from '@angular/forms';
import { Book } from './../shared/book';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  book = Book.empty();

  @ViewChild('bookForm')
  bookForm: NgForm;

  @Output()
  bookCreated = new EventEmitter<Book>();

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.bookForm.resetForm(this.book);
  }
}
