export class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  static fromJSON(json) {
    return new Book(json.title, json.author, json.isbn);
  }
}
