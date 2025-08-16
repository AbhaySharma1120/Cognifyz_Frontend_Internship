function validationForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.textContent = "All fields are required!";
    return false;
  }

  //Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    error.textContent = "Please enter a valid email!";
    return false;
  }

  error.textContent = "";
  alert("Form submitted successfully!");
  return true;
}
