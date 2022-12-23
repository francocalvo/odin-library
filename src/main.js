class cModal {
  constructor(id, options, btns = null) {
    const targetEl = document.getElementById(id);
    console.log(targetEl);
    this.modal = new Modal(targetEl, options);

    if (btns) {
      this.btns = btns;
      this.setButtonsListeners();
    }
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

// set the modal menu element
const targetEl = document.getElementById("modalEl");

// options with default values
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

const btns = document.querySelectorAll("button[data-modal='add']");
console.log(btns);
const modalAdd = new cModal("modalAdd", options, btns);
