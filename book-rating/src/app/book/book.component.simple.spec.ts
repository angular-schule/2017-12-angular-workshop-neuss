import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {

  let component: BookComponent;
  beforeEach(() => component = new BookComponent());

  it('should forward rateUp calls to book.rateUp', () => {
    // component.ngOnInit()

    component.book = new Book('', '', '');
    component.rateUp();
    expect(component.book.rating).toBe(2);
  });
});
