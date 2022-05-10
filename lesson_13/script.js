'use strict';

// Условие в if всегда преобразуеться в булевому типу.
/* 
if (4 == 9) {
  console.log('ok!');
} else {
  console.log('Error!');
}



if (num < 49) {
  console.log('Error');
} else if (num > 100) {
  console.log('Слишком много');
} else {
  console.log('ok!');
}


Написания условия с помощю тернарного оператора 
Единственный тернарный оператор который есть в JS
Тернарным называеться потому что у мего одного 3 аргумента. 2+2+2
Бинарный когда 2 аргумента 2+2
Унарный когда 1 аргумент +2

(num != 50) ? console.log('Правда!') : console.log('Лож!');
*/

/* ----------------- SWITCH 
  Идет строгое сравнение учитывая тип данных
*/

const num = 50;
switch (num) {
  case 49: console.log('Не верно!'); break;
  case 100: console.log('Не верно!'); break;
  case 51: console.log('Правда!'); break;
  default: console.log('Не в этот раз!'); break;
}