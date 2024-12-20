document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("exampleInputEmail1").value.trim();
  const password = document.getElementById("exampleInputPassword1").value;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/;

  if (password === "" && username === "") {
    alert("Please enter a username and password!");
    return;
  }

  if (password === "") {
    alert("Please enter a password!");
    return;
  }
  if (username === "") {
    alert("Please enter a username!");
    return;
  }
  if (!passwordRegex.test(password)) {
    alert(
      "Password must be between 8-15 characters, contain at least one uppercase letter, one number, and one special character."
    );
    return;
  }
  localStorage.setItem("username", username);
  window.location.href = "welcome.html";
});

const passwordInput = document.getElementById("exampleInputPassword1");
function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

const passwordValidation = document.getElementById("passwordValidation");

function passwordWriting() {
  const password = passwordInput.value;
  const common = "Password must ";

  const passwordUpperCase = /^(?=.*[A-Z])/;
  const passwordAtleastOneNumber = /^(?=.*\d)/;
  const passwordAtleastOneSpecialChar = /^(?=.*[!@#$%^&*])/;
  const passwordLowerCase = /^(?=.*[a-z])/;
  const passwordLength = /^.{8,15}$/;

  let validationMessage = "";

  if (password.length < 8 || password.length > 15) {
    validationMessage += common + "be between 8-15 characters. ";
  }
  if (!passwordUpperCase.test(password)) {
    validationMessage += common + "contain at least one uppercase letter. ";
  }
  if (!passwordAtleastOneNumber.test(password)) {
    validationMessage += common + "contain at least one number. ";
  }
  if (!passwordAtleastOneSpecialChar.test(password)) {
    validationMessage += common + "contain at least one special character. ";
  }
  if (!passwordLowerCase.test(password)) {
    validationMessage += common + "contain at least one lowercase letter. ";
  }

  if (validationMessage !== "") {
    passwordValidation.style.color = "red";
    passwordValidation.textContent = validationMessage;
  } else {
    passwordValidation.style.color = "green";
    passwordValidation.textContent = "Password is valid.";
  }
}
