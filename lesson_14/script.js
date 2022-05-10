'use strict';

/* Циклы */
let num = 50;

/* 
While выполняет цикл до тех пор пока не выполниться условие в собках

while (num <= 55) {
  console.log(num);
  num++;
}

While с пост условием
do {
  console.log(num);
  num++;
}
while (num <= 55);
*/
// Нужно быть очень внимательным с условиями, чтобы не зацыклить скрипт
for (let i = 1; i < 8; i++) {

  if (i == 6) {
    /* break; // Прерываем цикл */
    continue; // Исключаем значение но не прерываем цикл
  }
  console.log(i);
}