class cModal {
  constructor(id, options, btns = null) {
    const targetEl = document.getElementById(id);
    this.modal = new Modal(targetEl, options);

    if (btns) {
      this.btns = btns;
      this.setButtonsListeners();
    }
  }

  setButtonsListeners() {
    this.btns.forEach((btn) => {
      if (btn.dataset.modal == "hide") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.hide();
        });
      }

      if (btn.dataset.modal == "show") {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          this.modal.show();
        });
      }
    });
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

const modal = new cModal("modalEl", options, btns);
