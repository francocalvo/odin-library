export class Card {
  constructor(bookInfo, desc, cover) {
    this.data = { bookInfo: bookInfo, description: desc, cover: cover };
    this.card = document.querySelector("a");
    this.statusEl = this.card.querySelector(".status");
    this.button = this.card.querySelector("button");
    this.status = false;
  }

  getButton() {
    return this.button;
  }

  toggleRead(event) {
    event.preventDefault();
    this.status = this.status ? false : true;
    this.statusEl.textContent = this.status
      ? "Estado: leído"
      : "Estado: no leído";
    this.button.textContent = this.status ? "No leído" : "Leído";
  }

  setupButton() {
    this.button.addEventListener("click", (e) => {
      e.preventDefault();
      this.status = this.status ? false : true;
      this.statusEl.textContent = this.status
        ? "Estado: leído"
        : "Estado: no leído";
      this.button.textContent = this.status ? "No leído" : "Leído";
    });
  }
}
