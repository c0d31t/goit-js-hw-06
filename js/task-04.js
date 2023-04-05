let counterValue = 0;

const getIncr = document.querySelector('[data-action="increment"]');
const getDecr = document.querySelector('[data-action="decrement"]');
const getValue = document.querySelector("#value");

const incrValue = () => {
  counterValue += 1;
  getValue.textContent = counterValue;
};

const decrValue = () => {
  counterValue -= 1;
  getValue.textContent = counterValue;
};

getIncr.addEventListener("click", incrValue);
getDecr.addEventListener("click", decrValue);
