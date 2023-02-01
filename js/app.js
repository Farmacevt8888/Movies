'use strct';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  //функция проверки на правильность введеных данных
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  //функция вызова цикла по требованию
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(), //!метод trim() убирает все пробелы в начале и еонце строки
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
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  // метод проверяющий свойство privat
  toogleVisibleMyDB: () => {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre === '' || genre === 'null') {
      //   console.log('Вы ввели не корректные данные!');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }
      let genres = prompt('Ваш любимые жанры через запятую').toLowerCase();
      if (genres === '' || genres === 'null') {
        console.log('Вы ввели не корректные данные!');
        i--;
      } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
