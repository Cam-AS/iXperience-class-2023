class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  constructor() {
    this.form = document.getElementById('form');

    this.title = document.getElementById('title-input');
    this.author = document.getElementById('author-input');
    this.isbn = document.getElementById('isbn-input');

    this.tableBody = document.getElementById('table-body');

    this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

    this.books = [];

    this.renderBookTable();
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.title.value == '' || this.author == '' || this.isbn == '') {
      return;
    }

    const book = new Book(this.title.value, this.author.value, this.isbn.value);
    this.books.push(book);
    this.renderBookTable();

    this.title.value = '';
    this.author.value = '';
    this.isbn.value = '';
  }

  renderBookTable() {
    this.tableBody.innerHTML = '';

    for (let i = 0; i < this.books.length; i++) {
      const book = this.books[i];

      const tr = this.createBookTableRow(book);
      this.tableBody.appendChild(tr);
    }
  }

  createBookTableRow(book) {
    const tr = document.createElement('tr');

    const tdTitle = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdIsbn = document.createElement('td');
    const tdActions = document.createElement('td');

    tdTitle.innerHTML = book.title;
    tdAuthor.innerHTML = book.author;
    tdIsbn.innerHTML = book.isbn;

    const actionButtons = this.createActionButtons();
    tdActions.appendChild(actionButtons[0]);
    tdActions.appendChild(actionButtons[1]);

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdIsbn);
    tr.appendChild(tdActions);

    return tr;
  }

  createActionButtons() {
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');

    deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', () => {
      console.log('Delete was clicked');
    });

    editButton.setAttribute('class', 'btn btn-warning btn-sm ms-1');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', () => {
      console.log('Edit was clicked');
    });

    return [deleteButton, editButton];
  }
}

const ui = new UI();
