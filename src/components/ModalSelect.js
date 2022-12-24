import { ModalBase } from "./ModalBase.js";

export class ModalSelect extends ModalBase {
  constructor(id, options, btns = null) {
    super(id, options, btns);
  }

  displayBooks(books) {
    this.modal.show();
    const selection = this.form.getElementsByTagName("select")[0];
    selection.innerHTML = "";
    for (let b of books) {
      const title = b.title;
      const author = b.hasOwnProperty("author_name")
        ? b.author_name.join(", ")
        : "Desconocido";
      const option = document.createElement("option");
      option.value = b.key;
      option.innerText = `${title} - ${author}`;
      selection.appendChild(option);
    }
  }
}
