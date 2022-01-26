"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов уже просмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов уже просмотрели?', '');
        }
    },
    rememberOfMovies: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из просмотренных фильмов', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    movieViewingLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Вы посмотрели мало фильмов.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы клласическй зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }

    },
    writeYouGenres: function () {
        for (let i = 1; i < 2; i++) {
            
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            // if (genre === null || genre.genres === "") {
                
            // console.log('Вы ввели некоректное значение или вообще ничего не ввели');
            // i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;

            // }
            let genres = prompt(`Введите ваши любимые жанры через запятую`);
            if (genres === null || genres === "") {
                
                console.log('Вы ввели некоректное значение или вообще ничего не ввели');
                i--;
                } else {
                    personalMovieDB.genres = genres.split(', ');
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
        
    
        }
    }
};






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
// const options = {
//     name: 'Test',
//     width: 750,
//     height: 750,
//     colors:{
//         border: 'black',
//         bg: 'red'
//     }
// };

// let count = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             count++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         count++;
//     }
// }
// console.log(count);

// console.log(Object.keys(options).length);