// === Основы === //


// ---- База ---- //

// Однострочный комментарий
/* Многострочный
комментарий */

"use strict" // Строгий (современный) режим JS. Означает что весь последующий код (или вся последующая функция) будет работать со всеми нововведениями языка.

let message; // Обьявление переменной. Может быть: //* let msg1, msg2, msg3;
message = 'hello'; // Присваивание значения переменной
//* let message = 'hello';
//* let msg1 = 'hello', msg2 = 'bye', msg3 = 'kaef';

console.log(message); // Вывод в консоль

// ---- //


// ---- Типы данных ---- //

let number; // Числовой тип данных
number = Infinity; // Бесконечность
number = -Infinity; // Минус бесконечность
number = NaN; // Ошибка вычислений
number = 12; // Целое число
number = 3.6; // Число с плавающей точкой

let bigInt = 24760375680278475204673489578930876209867205867349865n; // Большое число, выходящие за пределы от -2^53-1 до 2^53-1

let string = 'Hello'; // Строка
string = `Message: ${message}`; // В обратных ковычках можно производить вычисления

let boolean = true; // Логическая переменная.
boolean = false;
boolean = 5 > 1; // Выдаст true

let _null = null; // Специальное значение, означающее что значение неизвестно

let _undefined = undefined; // Специальное значение, означающее что значение не было присвоено

let object, symbol; // Объекты и символы

typeof 34; // Возвращает тип аргумента - number
typeof true; // boolean
typeof alert; // function

// ---- //


// ---- Взаимодействие ---- //

//* alert("Hello");
// Модальное окно

//* let result = prompt("title", "ff");
// Модальное окно с полем для ввода
// title - текст
// ff - стандартное значение поля (необязательно)
// Введенное значение будет присвоено переменной result
// Если пользователь отменит операцию или нажмет ESC, то переменной присвоится значение null
// Для IE ff должен быть пустым

//* let result = confirm("question");
// Модальное окно с вопросом и кнопками ОК и Отмена
// question - вопрос
// Если ОК, то result = true, если Отмена, то false

//! Все эти методы - модальные, значит не дают пользователю доступ к сайту, пока окно не будет закрыто
// Внешний вид и расположение модальных окон определяется браузером и не изменяется кодом

// ---- //


// ---- Преобразование типов ---- //

// Обычно преобразование происходит автоматически
// alert переводит все в строку, а математические операторы преобразуют в числа

let value = true;
value = String(value); // Преобразование в строку (true -> "true")
value = Number(value); // В число ("true" -> NaN, т.к. преобразование не удалось)
// Правила численного преобразования:
// undefined -> NaN
// null -> 0
// true / false -> 1 / 0
// string - Пробелы по краям обрезаются, потом если осталась пустая строка, то 0, иначе считывается число, при ошибке NaN
value = Boolean(value); // Логическое преобразование
// 0, null, undefined, NaN -> false
// Остальные значения -> true
//! Строка с нулем или с пробелом: "0", " " -> true

// ---- //


// ---- Математика ---- //

// Операторы: +, -, *, /, % (Остаток от деления), ** (Возведение в степень)
// Возведение работает и с нецелой степенью: 4 ** (1/2) = 2
// Бинарный + может обьединять строки: "один" + "два" = "одиндва"
// 	если хотя бы один операнд - строка, то второй будет преобразован в строку
// 	но: 2 + 2 + "1" = "41", т.к. сначала оператор сложения чисел, а только потом строк
// 	все остальные операторы не работают со строками и преобразуют все операнды в числа
// Так же помимо унарного - существует унарный +, который просто преобразует операнд в число и ничего с ним не делает: +"" = 0; +true = 1 (То же, что и Number())
//* let a = "1", b = "2";
//* let c = a + b;
// Результат: "12"
//* let d = +a + +b;
// Результат: 3