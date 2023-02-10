const refs = {
  increment: document.querySelector('[data-action="increment"]'),
  decrement: document.querySelector('[data-action="decrement"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

// функції
const increment = () => {
  refs.value.textContent = counterValue += 1;
};

const decrement = () => {
  refs.value.textContent = counterValue -= 1;
};

// слухачі
refs.increment.addEventListener("click", increment);
refs.decrement.addEventListener("click", decrement);
