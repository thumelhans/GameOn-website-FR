// DOM Elements
const burgerNav = document.getElementById("myTopnav");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const successModal = document.querySelector(".successModal");
const checkBoxChecked = document.getElementById("checkbox1");
const radioChecked = document.querySelectorAll("input[name=location]");
const inputSelection = document.getElementsByName("input");
const formSelection = document.getElementById("submissionform");
const modalBody = document.querySelector(".modal-body");

// Regex elements
const birthDateRegex =
  /(200[0-4]|19[2-9]\d)\-(1[0-2]|0[1-9])\-(3[0-1]|[0-2]\d)/;
const nameRegex = /^[a-zA-Z\u00e0-\u00ff]+(([- ])?[a-z\u00e0-\u00ff])+$/;
const emailRegex =
  /(^[a-z\d]+[\.\-\_]?[a-z\d]+)@([a-z\d]+[.\-]?[a-z\d]+)\.[a-z]+$/;
const quantityRegex = /^\d?\d$/;

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

// Function used for reset error messages displayed when regexTest succeed
function resetFormAttr() {
  for (const elem of formData) {
    const getElemAttr = elem.getAttribute("data-error-visible");

    if (getElemAttr) {
      elem.setAttribute("data-error-visible", "false");
    }
  }
}

// Function used for display or not the form or the success message and reset the form values
function formDisplayAndValue() {
  const getClassName = modalBody.className;

  if (getClassName === "modal-body") {
    modalBody.classList.add("hidden");
    successModal.classList.remove("hidden");
    formSelection.reset();
  } else {
    modalBody.classList.remove("hidden");
    successModal.classList.add("hidden");
  }
}

//check if data is valid
function isFormDataValid() {
  let regexTestArray = Object.entries(regexTest());
  let isValid = true;

  resetFormAttr();

  for (const [key, value] of regexTestArray) {
    if (!value) {
      document
        .getElementById(key)
        .parentNode.setAttribute("data-error-visible", "true");
      isValid = false;
    }
  }

  return isValid;
}

// Check if a radio is checked
function isRadioChecked() {
  let isValid = false;

  radioChecked.forEach((element) => {
    if (element.checked) {
      isValid = true;
      return isValid;
    }
  });

  if (isValid === false) {
    document
      .getElementById("radioData")
      .setAttribute("data-error-visible", "true");
  }

  return isValid;
}

// Check if CGU checkbox is checked
function isCheckboxChecked() {
  let isValid;
  if (!checkBoxChecked.checked) {
    document
      .getElementById("checkboxData")
      .setAttribute("data-error-visible", "true");
    isValid = false;
  } else isValid = true;

  return isValid;
}

/* Event listener on form submission

    if the tests don't pass the validation => preventDefault
    else if the tests pass the validation => show success Message and return

*/
formSelection.addEventListener("submit", (e) => {
  const regexBool = isFormDataValid();
  const radioBool = isRadioChecked();
  const checkboxBool = isCheckboxChecked();

  if (!regexBool || !radioBool || !checkboxBool) {
    e.preventDefault();
  } else {
    e.preventDefault();
    formDisplayAndValue();
  }
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalCloseBtn.forEach((closeBtn) =>
  closeBtn.addEventListener("click", closeModal)
);

// launch modal form
function launchModal() {
  modalbg.classList.add("show");
}

// close modal form
function closeModal() {
  modalbg.classList.remove("show");
  if (modalBody.className === "modal-body hidden") {
    setTimeout(() => {
      formDisplayAndValue();
    }, 1000);
  }
}
