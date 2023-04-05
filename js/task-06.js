const input = document.querySelector("#validation-input");

const checkNumbers = () => {
  const enteredValue = input.value.length;
  const validLength = Number(input.dataset.length);

  if (enteredValue === validLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", checkNumbers);
