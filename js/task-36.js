/**
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ["London", "New York", "Singapore"];

const cityInfo = () => {
  return myCities.forEach((el) =>
    console.log(
      `${el} is at the index ${myCities.indexOf(el)} in the myCities array`
    )
  );
};

cityInfo();