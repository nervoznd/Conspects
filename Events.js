"use strict"

// События

const vkLink = document.querySelector('.vklink') // Берем ссылку из страницы.

vkLink.addEventListener('click', function (e) { // Добавляем лисенер к ссылке на клик. Вносим в функцию параметр e. 
	e.preventDefault(); // Удаляем дефолтные настройки. Здесь это href в vk.com.
	window.location = 'https://odnoklassniki.ru/' // Перенаправляем на Одноклассники, ибо они лучше чем тупой ВК.
})

// Добавляем лисенеры на несколько объектов с тэгом <p>:

const pTags = document.querySelectorAll('p'); // Берем все элементы нужного тэга/id/класса.

pTags.forEach(pTag => { // Запускаем цикл, где каждый элемент pTags будем звать pTag.
	pTag.addEventListener('click', function () { // Добавляем лисенер.
		pTag.style.color = 'blue'; // Красим в синий для демонстрации.
	})
})
