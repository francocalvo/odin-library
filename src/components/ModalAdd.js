import { ModalBase } from "./ModalBase.js";

export class ModalAdd extends ModalBase {
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
        });
      }
    });
  }
}
