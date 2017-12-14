import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map as rxMap, retry, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/empty';


import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAllStatic() {
    return [
      new Book('000', 'Angular', 'tolles Buch', 1, new Date()),
      new Book('111', 'AngularJS', 'oldy but goldy', 5, new Date())
    ];
  }

  getAll() {
    return this.http
      .get<Book[]>('https://api.angular.schule/booksSSSSS')
      .pipe(
        retry(3),
        rxMap(rawBook => rawBook
          .map(b => new Book(
            b.isbn,
            b.title,
            b.description,
            b.rating,
            new Date(b.published) // we have to map from string to Date()
          )
        )
      ),
      catchError(() => Observable.empty()));
  }
}
