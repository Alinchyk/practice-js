/**
 * Что будет выведено в консоли?
 * Ответьте на вопрос без запуска кода
 */

function fn() {
  console.log("Привет из функции fn");

  return function (a) {
    console.log(a);
  };
}

fn()(true);
