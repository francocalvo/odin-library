"use strict";
import { ModalAdd } from "./components/ModalAdd.js";
import { ModalSelect } from "./components/ModalSelect.js";
import { Library } from "./components/Library.je"
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
    this.setupSelectForm(this.modalSelect.form);
    this.setupAddForm(this.modalAdd.form);
  }

  setupAddForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let books;
      this.searchBook(e.target).then((res) => {
        books = res.items;
        this.modalAdd.hide();
        this.modalSelect.displayBooks(books);
      });
    });
  }

  setupSelectForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

    });
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
