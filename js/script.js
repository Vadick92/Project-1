"use strict";

const numberOfFilms = +prompt('Сколько фильмов уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





for (let i = 0; i < 2; i++) {
    const a = prompt('Один из просмотренных фильмов', ''),
    b = prompt('На сколько оцените его?', '');

    if (a !=null && b !=null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else{
        console.log('error');
        i--;
    }
}
if (personalMovieDB.count < 10){
    console.log('Вы посмотрели мало фильмов.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы клласическй зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

// if (num < 49) {
//     console.log('Мало');   
// }
// else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ок!');
// }
// const num = 50;

// switch (50) {
//     case 49:
//         console.log('Нет');
//         break;
//     case 100:
//         console.log('Неа');
//         break;
//     case 51:
//         console.log('То что нужно!');
//         break;

//     default:
//         console.log('Не в этот раз!');
//         break;
// }