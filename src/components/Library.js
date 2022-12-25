import { createCardHTML } from "../constants/card.js";
import { Card } from "./Card.js";
export class Library {
  constructor() {
    this.main = document.getElementById("library");
    this.cards = [];
  }

  addBook(bookInfo, description, cover) {
    const data = {
      title: bookInfo.title,
      authors: bookInfo.hasOwnProperty("author_name")
        ? bookInfo.author_name.join(", ")
        : "Desconocido",
      cover: cover,
      publish: bookInfo.hasOwnProperty("first_publish_year")
        ? bookInfo.first_publish_year
        : bookInfo.hasOwnProperty("publish_year")
        ? bookInfo.publish_year.reduce(
            (min, curr) => (min < curr ? min : curr),
            10000
          )
        : null,
      description: description,
      pages: bookInfo.hasOwnProperty("number_of_pages_median")
        ? bookInfo.number_of_pages_median
        : "Not found",
      status: false,
    };

    const html = createCardHTML(data);
    this.main.insertAdjacentHTML("afterbegin", html);
    return this.addCard(bookInfo, description, cover);
  }

  addCard(bookInfo, description, cover) {
    const card = new Card(bookInfo, description, cover);
    this.cards.push(card);
    return this.cards[this.cards.length - 1];
  }
}
