const list = document.createElement("ul");
document.body.append(list);
console.log(list);

const item = document.createElement("li");

while (true) {
  const input = prompt("Введіть текст:");

  if (!input) {
    break;
  }

  const item = document.createElement("li");
  item.textContent = input;
  list.append(item);
}
