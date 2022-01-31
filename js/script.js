/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1
const adv = document.querySelectorAll('.promo__adv img');
/* adv.remove(); *///не сработает - у нас коллекция(псевдо-массив)

adv.forEach(item => {
    item.remove();
});//перебрали массив и удалили каждый элемент

//обычная функция - одноразовая, без имени (тоже самое)
/* adv.forEach(function (item) {
    item.remove();
}); */

//2
const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre');

genre.textContent = "Драмма";//поменяли жанр

//3
poster.style.backgroundImage = 'url("img/bg.jpg")'; //поменяли фон

//4
const movieList = document.querySelector('.promo__interactive-list');

movieList.innerHTML = "";//удалили по селектору

movieDB.movies.sort();//обратились к базе (объекту - свойство-movies - массив) и отсортировали

/* console.log(poster.innerHTML); */

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});

