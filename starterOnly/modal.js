// DOM Elements
const burgerNav = document.getElementById("myTopnav");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const successModal = document.getElementById("successModal");
const checkBoxChecked = document.getElementById("checkbox1");
const radioChecked = document.querySelectorAll("input[name=location]");

console.log(formData);

// Regex elements
const birthDateRegex =
  /(200[0-4]|19[2-9]\d)\-(1[0-2]|0[1-9])\-(3[0-1]|[0-2]\d)/g;
const nameRegex = /^[a-zA-Z\u00e0-\u00ff]+(([- ])?[a-z\u00e0-\u00ff])+$/;
const emailRegex =
  /(^[a-z\d]+[\.\-\_]?[a-z\d]+)@([a-z\d]+[.\-]?[a-z\d]+)\.[a-z]+$/g;
const quantityRegex = /^\d?\d$/g;

// Array used for regex test
const inputValue = [
  {
    id: "first",
    isValid: (value) => nameRegex.test(value),
  },
  {
    id: "last",
    isValid: (value) => nameRegex.test(value),
  },
  {
    id: "email",
    isValid: (value) => emailRegex.test(value),
  },
  {
    id: "birthdate",
    isValid: (value) => birthDateRegex.test(value),
  },
  {
    id: "quantity",
    isValid: (value) => quantityRegex.test(value),
  },
];

// responsive navigation menu
function editNav() {
  if (burgerNav.className === "topnav") {
    burgerNav.className += " responsive";
  } else {
    burgerNav.className = "topnav";
  }
}


/**
 * regexTest return an Object for Each inputValue { inputValue.Id: inputValue.isValid }
 *
 * @return { inputValue.Id: inputValue.isValid } 
 */

function regexTest() {
  const inputsValidity = {};

  inputValue.forEach((input) => {
    inputsValidity[input.id] = input.isValid(
      document.getElementById(input.id).value
    );
  });

  return inputsValidity;
}

//check if data is valid
function isFormDataValid() {
  const regexTestArray = regexTest();
  let isValid;
  for (const element in regexTestArray) {
    if (!regexTestArray[element]) {
      document
        .getElementById(element)
        .parentNode.setAttribute("data-error-visible", "true");
        isValid = false;
      }
    }
    return isValid;
}

// Check if a radio is checked
function isRadioChecked() {
  for (const element of radioChecked) {
    if (!element.checked) {
      document.getElementById("radioData").setAttribute("data-error-visible", "true");
    }
  }
}

// Check if CGU checkbox is checked
function isCheckboxChecked() {
  if (!checkBoxChecked.checked) {
    document.getElementById("checkboxData").setAttribute("data-error-visible", "true");
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
