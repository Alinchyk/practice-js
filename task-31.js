/**
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: "Audi",
    price: 2000,
    isAvailableForSale: true,
  },
  {
    carBrand: "Tesla",
    price: 5000,
    isAvailableForSale: false,
  },
  {
    carBrand: "BMW",
    price: 4000,
    isAvailableForSale: false,
  },
];
console.log(cars);

const newCar = {carBrand: "Renault", price: 1000, isAvailableForSale: true};
cars.push(newCar);
console.log(cars);
