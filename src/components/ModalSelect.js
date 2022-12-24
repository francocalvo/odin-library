import { ModalBase } from "./ModalBase.js";

export class ModalSelect extends ModalBase {
  constructor(id, options, btns = null) {
    super(id, options, btns);
  }

  displayBooks(books) {
    this.modal.show();
    const selection = this.form.getElementsByTagName("select")[0];
    for (let b of books) {
      const title = b.volumeInfo.title;
      const author = b.volumeInfo.hasOwnProperty("authors")
        ? b.volumeInfo.authors.join(", ")
        : "Desconocido";
      const option = document.createElement("option");
      option.value = b.id;
      option.innerText = `${title} - ${author}`;
      selection.appendChild(option);
    }
  }
}
