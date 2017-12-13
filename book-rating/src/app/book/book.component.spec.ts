import { By } from '@angular/platform-browser';
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
    component.book = {
      rating: 0,
      rateUp: () => {},
    } as any;
    fixture.detectChanges();
  });

  it('should forward rateUp calls to book.rateUp', () => {
    spyOn(component.book, 'rateUp');
    component.rateUp();
    expect(component.book.rateUp).toHaveBeenCalled();
  });

  it('should be able to click on the button', () => {

    component.book = new Book('', '', '');
    const button = fixture.debugElement
      .query(By.css('.btn-danger'))
      .nativeElement;

    button.click();

    expect(component.book.rating).toBe(2);
  });
});
