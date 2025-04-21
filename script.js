const form = document.getElementById("signup-form");
const submitBtn = document.getElementById("submit-btn");
const password = document.getElementById("password");
const confirm_pass = document.getElementById("confirm_password");

submitBtn.addEventListener("click", () => {
  if (password.value !== confirm_pass.value) {
    confirm_pass.setCustomValidity("Passwords do not match");
    confirm_pass.reportValidity();
    return;
  } else {
    confirm_pass.setCustomValidity("");
  }

  if (form.checkValidity()) {
  } else {
    form.reportValidity();
  }
});
