'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Одержимость",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Скотт Пилигрим против..."
        ]
    };

    const advertising = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieItem = document.querySelectorAll('.promo__interactive-item'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 15) {
                newFilm = `${newFilm.substring(0, 15)}...`;
            }
            if (favorite) {
                console.log('best film');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        e.target.reset();

    });


    const deleteAdv = (someArr) => {
        someArr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(advertising);

    const makeChanges = () => {
        genre.textContent = "Drama";
        poster.style.backgroundImage = "url('/img/bg.jpg')";

    };
    makeChanges();

    // movieItem.forEach(item => {        //це якщо querySelectorAll, але тоді все видалиться, а не очиститься
    //     item.remove();
    // });

    // ========================== Lesson 33 =======================================

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `
<li class= "promo__interactive-item">${i + 1 + '.'} ${film}
<div class= "delete"></div >
        </li >
    `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });

    }

    createMovieList(movieDB.movies, movieList);


});



