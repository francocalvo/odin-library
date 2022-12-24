export class ModalBase {
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
