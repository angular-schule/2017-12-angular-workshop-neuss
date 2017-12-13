import { Book } from './../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should forward rateUp calls to book.rateUp', () => {

    let rateUpWasCalled = false;
    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 0,
      rateUp: () => rateUpWasCalled = true,
      rateDown: () => { }
    };

    fixture.detectChanges();

    component.rateUp();
    expect(rateUpWasCalled).toBe(true);
  });
});
