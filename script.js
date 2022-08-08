"use strict";

const numberofFilms = +prompt('How much movies did you watch?','');

const personalMovieDB = {
    'count': numberofFilms,
    'movies': {},
    'actors': {},
    'genres': [],
    'privat': false
};

const a = prompt('Один из последних просмотренных фильмов?','');
const b = +prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);