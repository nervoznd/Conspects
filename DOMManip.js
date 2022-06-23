"use strict"

// Манипулирование DOM элементами

const emptyDiv = document.querySelector('.emptydiv'); // Создаем константу. Пихаем в нее наш пустой блок.
const redDiv = document.createElement('div'); // Создаем новый блок.
const someText = document.createElement('p'); // Создаем абзац.
redDiv.style.backgroundColor = 'red'; // Меняем стиль нашего блока.
someText.innerText = 'SOME TEXT'; // Меняем текст абзаца.
emptyDiv.appendChild(redDiv); // Добавляем в пустой див наш новый див.
redDiv.appendChild(someText); // Пихаем в новый див наш абзац.

// Итого скрипт добавляет на страницу новый блок с текстом внутри.

// Можно добавлять элементам классы:
someText.classList.add('whiteText');