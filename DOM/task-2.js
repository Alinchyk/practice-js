const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");

console.log(list);

const listMarkup = function (ingredient) {
  return ingredient.map((el) => {
    const li = document.createElement("li");
    li.textContent = el;

    return li;
  });
};

const elements = listMarkup(ingredients);
list.append(...elements);
