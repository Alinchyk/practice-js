const item = document.querySelectorAll(".item");

// підрахунок і виведення категорій
const categories = item.length;
console.log(`У списку ${categories} категорії.`);

// підрахунок і виведення інформації категорій
item.forEach(el => {
  const title = el.querySelector("h2").textContent;
  const li = el.querySelectorAll("li");

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${li.length}`);
});
