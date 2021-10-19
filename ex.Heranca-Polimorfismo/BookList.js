class Book {
  constructor(title, genre, author) {
    this.title = title,
    this.genre = genre,
    this.author = author,
    this.read = false,
    this.readDate = undefined;
  }

  markAsRead() {
    this.read = true;
    this.readDate = new Date(Date.now());

    return this.read && this.readDate
  }
}

class BookLists {
  constructor() {
    this.bookList = [];
    this.numBooksRead = 0;
    this.numBooksUnread = 0;
    this.refNextBookRead = undefined;
    this.refLastBookRead = undefined;
    this.refCurrentBookRead = undefined;
    this.indexCurrentBook = undefined;
  }

  get currentBook() {
    this.refCurrentBookRead = this.bookList[this.indexCurrentBook]
    return this.refCurrentBookRead;
  }

  get nextBook() {
    this.refNextBookRead = this.bookList[this.indexCurrentBook + 1];
    return this.refNextBookRead ? this.refNextBookRead : "No more books..";
  }

  get lastBook() {
    this.refLastBookRead = this.bookList[this.indexCurrentBook - 1];
    return this.refLastBookRead ? "This is your first book.." : this.refLastBookRead;
  }

  listAll() {
    return this.bookList;
  }

  addBook(book) {
    this.bookList = [...this.bookList, book];
    this.numBooksUnread++;

    if(this.bookList.length === 1) {
      this.indexCurrentBook = 0
    }
  }

  finishCurrentBook() {
    this.currentBook?.markAsRead()
    this.numBooksRead++;
    this.numBooksUnread--;
    this.indexCurrentBook++;
  }

  searchByGenre(genre) {
    return this.bookList.filter((book) => book.genre === genre);
  }

  searchByAuthor(author) {
    return this.bookList.filter((book) => book.author === author);
  }

  searchByTitle(title) {
    return this.bookList.filter((book) => book.title === title);
  }

  listAllBooksRead() {
    return this.bookList.filter((book) => book.read === true);
  }

  listAllUnreadBooks() {
    return this.bookList.filter((book) => book.read === false);
  }
}

let book1 = new Book("I'm afraid!", "Horror", "Giulia");
let book2 = new Book("I'm in love!", "Romance", "Larissa");
let book3 = new Book("Help me Giulia!", "Horror", "Giulia");

let list = new BookLists();

list.addBook(book1);
list.finishCurrentBook();
// list.addBook(book2);
// list.finishCurrentBook();
// list.addBook(book3);

// console.log(list.searchByGenre("Horror"))
// console.log(list.searchByAuthor("Giulia"))
// console.log(list.searchByTitle("I'm in love!"))
// console.log(list.listAllBooksRead())
// console.log(list.listAllUnreadBooks())
// console.log(list.listAll());

console.log(list.lastBook)