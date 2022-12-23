class cModal {
  constructor(id, options, btns = null) {
    const targetEl = document.getElementById(id);
    this.closeBtn = this.modal = new Modal(targetEl, options);
    if (btns) {
      this.btns = btns;
      this.setButtonsListeners();
    }
  }

  setButtonsListeners() {
    console.log(Array(btns[]))
    for (const btn in this.btns) {
      console.log(btn)
      if (btn.dataset.modal == "close") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.close();
        });
      }
    }

    for (const btn in this.btns) {
      if (btn.dataset.modal == "close") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.open();
        });
      }
    }
  }
}

// set the modal menu element
const targetEl = document.getElementById("modalEl");

// options with default values
const options = {
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
};

const btns = document.querySelectorAll("button[data-modal]");
console.log(btns);

const modal = new cModal(targetEl, options, btns);
