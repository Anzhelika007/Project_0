'use strict';

document.addEventListener('DOMContentLoaded', () => {//ждем только построения DOM-структуры (не тяжелых картинок/шрифтов и.д.)
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
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
    /* adv.remove(); *///не сработает - у нас коллекция(псевдо-массив)

    // oбработчик событий на форму
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            //обрезаем свыше 21 символа
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            //любимые фильмы
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }


            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        //очищаем инпут
        event.target.reset()
    });

    const deletAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });//перебрали массив и удалили каждый элемент
    }
    //обычная функция - одноразовая, без имени (тоже самое)
    /* adv.forEach(function (item) {
        item.remove();
    }); */

    deletAdv(adv);

    const makeChanges = () => {
        genre.textContent = "Драмма";//поменяли жанр
        poster.style.backgroundImage = 'url("img/bg.jpg")'; //поменяли фон

    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent) {
        parent.innerHTML = "";//удалили по селектору
        sortArr(films);//обратились к базе (объекту - свойство-movies - массив) и отсортировали

        //добавляем строки, полученные из инпута
        films.forEach((film, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
        `;
        });

        //удаление фильмов при помощи корзины
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                //перестройка нумерации рекурсия
                createMovieList(films, parent);
            });
        });

    };

    createMovieList(movieDB.movies, movieList);

});

