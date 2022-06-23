"use strict"

// Работа с API

const games = fetch('https://api.sampleapis.com/beers/ale') // Добавляем наш API.
	.then(res => res.json()) // Получаем ответ и переводим его в формат json.
	.then(data => { console.log(data) }) // Выводим данные в консоль.