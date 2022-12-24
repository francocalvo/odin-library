class ModalBase {
  constructor(id, options, btns = null) {
    const targetEl = document.getElementById(id);
    this.form = targetEl.getElementsByTagName("form")[0];
    this.modal = new Modal(targetEl, options);

    if (btns) {
      this.btns = btns;
      this.setButtonsListeners();
    }
  }

  hide() {
    this.modal.hide();
  }

  show() {
    this.modal.hide();
  }

  toggle() {
    this.modal.hide();
  }

  setButtonsListeners() {
    this.btns.forEach((btn) => {
      const dataLabel = `modal${
        btn.dataset.modal[0].toUpperCase() + btn.dataset.modal.substring(1)
      }`;
      if (btn.dataset[dataLabel] == "hide") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.hide();
        });
      }

      if (btn.dataset[dataLabel] == "show") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.show();
        });
      }

      if (btn.dataset[dataLabel] == "continue") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.show();
        });
      }
    });
  }
}

class ModalSelect extends ModalBase {
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

class ModalAdd extends ModalBase {
  constructor(id, options, btns = null) {
    super(id, options, btns);
    this.api = false;
    if (btns) {
      this.setupAddButtons();
    }
  }

  setupAddButtons() {
    this.btns.forEach((btn) => {
      const dataLabel = `modal${
        btn.dataset.modal[0].toUpperCase() + btn.dataset.modal.substring(1)
      }`;

      if (btn.dataset[dataLabel] == "show") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const hiddenField = document.getElementById("apikey");
          if (this.api === false) {
            hiddenField.classList.toggle("hidden");
            this.api = true;
          }
        });
      }
    });
  }
}

class Forms {
  constructor() {
    const options = {
      options: {
        placement: "center-center",
        backdrop: "dynamic",
        backdropClasses:
          "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        onHide: () => {
          console.log("modal is hidden");
        },
        onShow: () => {
          console.log("modal is shown");
        },
        onToggle: () => {
          console.log("modal has been toggled");
        },
      },
    };
    const btnsAdd = document.querySelectorAll("button[data-modal='add']");
    const btnsSelect = document.querySelectorAll("button[data-modal='select']");
    this.modalAdd = new ModalAdd("modalAdd", options, btnsAdd);
    this.modalSelect = new ModalSelect("modalSelect", options, btnsSelect);
    this.setupAddForm(this.modalAdd.form);
  }

  async setupAddForm(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let books;
      const booksRaw = this.searchBook(e.target).then((res) => {
        books = res.items;
        this.modalAdd.hide();
        this.modalSelect.displayBooks(books);
      });
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
        this.apikey = pair[1];
      }
    }

    const queryString = `https://www.googleapis.com/books/v1/volumes?q=${info[
      "book"
    ].replaceAll(" ", "+")}${
      info["author"] !== ""
        ? "+inauthor:" + info["author"].replaceAll(" ", "+")
        : ""
    }&key=${this.apikey}`;

    const res = await fetch(queryString, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin );
    });
    return res.json();
  }
}

const App = new Forms();
