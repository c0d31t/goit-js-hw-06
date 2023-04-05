const form = document.querySelector(".login-form");

form.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("All fields must be filled in");
  }

  console.log({ email: ${ email.value }, password: ${ password.value }});
  event.currentTarget.reset();
}
