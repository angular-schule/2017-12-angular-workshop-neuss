import {Book} from './book';
import { Injectable } from '@angular/core';

@Injectable()
export class BookStoreService {

  constructor() { }

  getAllStatic() {
    return [
      new Book('000', 'Angular', 'tolles Buch'),
      new Book('111', 'AngularJS', 'oldy but goldy', 5)
    ];
  }

}
