"use strict";

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function () {
//         personalMovieDB.count = +prompt('Сколько фильмов уже просмотрели?', '');

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//             personalMovieDB.count = +prompt('Сколько фильмов уже просмотрели?', '');
//         }
//     },
//     rememberOfMovies: function () {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из просмотренных фильмов', ''),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },
//     movieViewingLevel: function () {
//         if (personalMovieDB.count < 10) {
//             console.log('Вы посмотрели мало фильмов.');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы клласическй зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function (hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else{
//             personalMovieDB.privat = true;
//         }

//     },
//     writeYouGenres: function () {
//         for (let i = 1; i < 2; i++) {
            
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             // if (genre === null || genre.genres === "") {
                
//             // console.log('Вы ввели некоректное значение или вообще ничего не ввели');
//             // i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;

//             // }
//             let genres = prompt(`Введите ваши любимые жанры через запятую`);
//             if (genres === null || genres === "") {
                
//                 console.log('Вы ввели некоректное значение или вообще ничего не ввели');
//                 i--;
//                 } else {
//                     personalMovieDB.genres = genres.split(', ');
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр №${i+1} - это ${item}`);
//         });
        
    
//         }
//     }
// };






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
// let x = 5;
// alert(x++); // !Ответ 5 так как постфиксное выражение плюсов

// let x = [] + false - null + true;
// console.log(x); // !ответ Nan

// let y = 1;
// let x = y = 2;
// alert(x); // !ответ 2 

// console.log([]+1+2); //! Ответ 12 потому что ..... пустой массив тоже самое что пустая строка "" а строка +  число получаем строку поэтому один превращается в строку "1" и потом строка "1" + число 2 дает строку "12"
// alert('1'[0]); //! Ответ 1
// console.log(2 && 1 && null && 0 && undefined ); // ! Ответ null потому что оператор (& "и") запинается на лжи (false) а так как null == false он и вернул null
// •	Есть ли разница между выражениями? !!( a && b ) и (a && b)? //! Ответ: два знака !! превращают в булиновое значение поэтому они не равны разные типы даных

// alert( null || 2 && 3 || 4 );  //! Ответ 3 Потому что .... оператор ИЛИ запинается на правде и приоретет у оператора И сначала выражение было выполнено 2 и 3 вернул последнее 3 потом сравнил с null запнулся вернул 3 и потом неуспел даже сравнить с 4 запнулся на 3 вернул 3
//  •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? //! Ответ: ложь a==b так как это два разных хранилища информации хоть и похожи как бы два разных ящика они похожи но на деле это же два разных ящика
// alert( +"Infinity" );  //! Ответ Infinity 
// •	Верно ли сравнение: "Ёжик" > "яблоко"? //! Ответ: будет false по кодировке юникод 

// console.log(0 || "" || 2 || undefined || true ||false); //! Ответ 2 потому что....... ИЛИ запнулся на правде т.е. на 2 и вернет 2 дальше выражение не пойдет
