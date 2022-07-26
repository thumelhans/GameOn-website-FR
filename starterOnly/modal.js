// DOM Elements
const burgerNav = document.getElementById("myTopnav");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const successModal = document.getElementById("successModal");
const checkBoxChecked = document.getElementById("checkbox1");
const radioChecked = document.querySelectorAll("input[name=location]");

// responsive navigation menu
function editNav() {
  if (burgerNav.className === "topnav") {
    burgerNav.className += " responsive";
  } else {
    burgerNav.className = "topnav";
  }
}

//check if data is empty
function isFormDataEmpty() {
  for (const element of formData) {
    if (!element.children[2].value) {
      element.setAttribute("data-error-visible", "true");
    }
  }
}

// Check if a radio is checked
function isRadioChecked() {
  for (const element of radioChecked) {
    
    if (!element.checked) {
    }
  }
}

// Check if CGU checkbox is checked
function isCheckboxChecked() {
  if (!checkBoxChecked.checked) {

  }
}

// // launch modal event
// modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// // close modal event
// modalCloseBtn.forEach((closeBtn) => closeBtn.addEventListener("click", closeModal));

// // launch modal form
// function launchModal() {
//   modalbg.classList.add("show");
// }

// // close modal form
// function closeModal() {
//   modalbg.classList.remove("show");
// }