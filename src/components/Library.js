import { createCardHTML } from "../constants/card.js";
export class Library {
  constructor() {
    this.main = document.getElementById("library");
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

    console.log(data);
    const html = createCardHTML(data);
    this.main.insertAdjacentHTML("afterbegin", html);
  }
}
