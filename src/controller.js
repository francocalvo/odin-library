import { ModalAdd } from "./components/ModalAdd.js";
import { ModalSelect } from "./components/ModalSelect.js";
import { Library } from "./components/Library.js";
import * as model from "./model.js";
import * as constants from "./constants/index.js";

class App {
  constructor() {
    const btnsAdd = document.querySelectorAll("button[data-modal='add']");
    const btnsSelect = document.querySelectorAll("button[data-modal='select']");
    this.modalAdd = new ModalAdd("modalAdd", constants.options, btnsAdd);
    this.modalSelect = new ModalSelect(
      "modalSelect",
      constants.options,
      btnsSelect
    );
    this.library = new Library();
    this.setupSelectForm(this.modalSelect.form);
    this.setupAddForm(this.modalAdd.form);
  }

  setupAddForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let books;
      this.searchBook(e.target).then((res) => {
        books = res.items;
        model.state.lastSearch = books;
        this.modalAdd.hide();
        this.modalSelect.displayBooks(books);
      });
    });
  }

  setupSelectForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.selectBook(form);
    });
  }

  async selectBook(form) {
    const data = new FormData(form);
    const bookId = data.get("book");
    let bookInfo;
    for (let book of model.state.lastSearch) {
      console.log(bookId, book.id);
      bookInfo = book.id === bookId ? book : bookInfo;
    }
    model.state.bookList.push(bookInfo);
    this.library.addBook(bookInfo);
    const isbn = bookInfo.volumeInfo.industryIdentifiers[0].identifier;
    const extra = await constants.getExtraData(isbn);
    console.log(extra);
    this.modalSelect.hide();
  }

  async searchBook(form) {
    const data = new FormData(form);
    const info = { book: "", author: "" };

    for (const pair of data.entries()) {
      if (info.hasOwnProperty(pair[0])) {
        console.log("FORMS: Registering book&author info");
        info[pair[0]] = pair[1];
      }
      if (pair[0] === "apikey") {
        console.log("FORMS: Registering API Key");
        model.state.apikey = pair[1];
        this.modalAdd.api = true;
      }
    }
    const res = await constants.searchQuery(
      info.book,
      info.author,
      model.state.apikey
    );
    return res.json();
  }
}

const app = new App();
