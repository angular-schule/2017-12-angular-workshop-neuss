import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'tolles Buch'),
      new Book('111', 'AngularJS', 'oldy but goldy', 5)
    ];
    this.reorderBooks();
  }

  reorderBooks(book?: Book) {
    console.log('Buch:', book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

}
