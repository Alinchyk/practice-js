const elList = document.querySelector("#elem");

const clear = function (el) {
  el.innerHTML = "";
  return el;
};

clear(elList); // очищує список
console.log(elList);
