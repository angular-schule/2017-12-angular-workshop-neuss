export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating: number,
    public published: Date
  ) {
  }

  static empty(): Book {
    return new Book('', '', '', 1, new Date());
  }

  rateUp() {
    if (this.rating < 5) {
      this.rating++;
    }
  }

  rateDown() {
    if (this.rating > 1) {
      this.rating--;
    }
  }
}
