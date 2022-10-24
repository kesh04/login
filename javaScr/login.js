const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the valuse frome the inputs
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue == "") {
    // show error
    // add error
    setErrorFor(username, "Username cannot be empty");
  } else {
    // add suscces calss
    setSuccessFor(username);
  }
  if (emailValue == "") {
    setErrorFor(email, "Email cannot be empty");
  } else {
    setSuccessFor(email);
  }
  if (passwordValue == "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    // add suscces calss
    setSuccessFor(password);
  }
  if (password2Value == "") {
    setErrorFor(password2, "Password cannot be empty");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Password does not match ");
  } else {
    // add suscces calss
    setSuccessFor(password2);
  }

  function setErrorFor(input, message) {
    const forControl = input.parentElement; // form-control
    const small = forControl.querySelector("small");

    // add error message inside small
    small.innerText = message;
    forControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const forControl = input.parentElement; // form-control
    forControl.className = "form-control success";
  }
}


