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

//1.1
const adv = document.querySelectorAll('.promo__adv img');
/* adv.remove(); *///не сработает - у нас коллекция(псевдо-массив)

adv.forEach(item => {
    item.remove();
});//перебрали массив и удалили каждый элемент

//обычная функция - одноразовая, без имени (тоже самое)
/* adv.forEach(function (item) {
    item.remove();
}); */

//1.2
const poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre');

genre.textContent = "Драмма";//поменяли жанр

//1.3
poster.style.backgroundImage = 'url("img/bg.jpg")'; //поменяли фон

//1.4
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

