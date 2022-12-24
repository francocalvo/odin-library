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
      this.searchBook(e.target).then((res) => {
        model.state.lastSearch = res;
        this.modalAdd.hide();
        this.modalSelect.displayBooks(res);
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
      bookInfo = book.key === bookId ? book : bookInfo;
    }
    this.addBook(bookInfo);
  }

  async searchBook(form) {
    const data = new FormData(form);
    const info = { book: "", author: "" };

    for (const pair of data.entries()) {
      if (info.hasOwnProperty(pair[0])) {
        console.log("FORMS: Registering book&author info");
        info[pair[0]] = pair[1];
      }
    }
    const res = await constants.searchQuery(
      info.book,
      info.author,
    );
    return res.docs;
  }

  async addBook(bookInfo) {
    model.state.bookList.push(bookInfo);
    const isbn = bookInfo.isbn[0];
    const cover = constants.getCover(isbn);
    const description = await constants.getDescription(isbn);
    this.library.addBook(bookInfo, description, cover);
    this.modalSelect.hide();
  }
}

const app = new App();
