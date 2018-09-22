//Add blur event listeners
document.getElementById("user-name").addEventListener("blur", validateName);
document.getElementById("user-email").addEventListener("blur", validateEmail);
document
  .getElementById("user-phoneNumber")
  .addEventListener("blur", validatePhoneNumber);
document.getElementById("user-zip").addEventListener("blur", validateZip);

function validateName() {
  const name = document.getElementById("user-name");

  //Regex value checks for name that starts with A-Z/a-z for 2 - 10 characters
  const regex = /^[a-zA-Z]{2,10}$/;

  if (!regex.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("user-email");

  //Regex value checks for email that starts letters, contains an @ then ends with . value
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regex.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}
function validatePhoneNumber() {
  const phoneNumber = document.getElementById("user-phoneNumber");

  //Regex value checks for phoneNumber that 4 numbers long
  const regex = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]\d{4}$/;

  if (!regex.test(phoneNumber.value)) {
    phoneNumber.classList.add("is-invalid");
  } else {
    phoneNumber.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.getElementById("user-zip");

  //Regex value checks for zip that 4 numbers long
  const regex = /^[0-9]{4}$/;

  if (!regex.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}
