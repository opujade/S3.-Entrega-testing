// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  // console.log('EXERCISE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movies) => movies.director === director);
  // console.log('EXERCISE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = getMoviesFromDirector(array, director);
  let totalScore = moviesFromDirector.reduce(
    (total, movie) => total + movie.score,
    0
  );
  let result = parseFloat((totalScore / moviesFromDirector.length).toFixed(2));
  // console.log('EXERCISE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
  // console.log('EXERCISE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array
    .sort((a, b) => (a.title < b.title ? -1 : a.title > b.title ? 1 : 0)) // Ordenar alfabeticamente
    .sort((a, b) => a.year - b.year)
    .map((value) => value);
  // console.log('EXERCISE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let arrayGenre = array.filter((movie) => movie.genre.includes(genre));
  let totalScore = arrayGenre.reduce((total, movie) => total + movie.score, 0);
  let average = parseFloat((totalScore / arrayGenre.length).toFixed(2));
  // console.log('EXERCISE 6 ->', average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let durationMinutes = [];
  let aux = [];
  array.forEach((movie, index) => {
    if (typeof movie.duration == 'string') {
      aux[index] = movie.duration.split(' ');
      if (aux[index][1]) {
        durationMinutes[index] =
          parseInt(aux[index][0]) * 60 + parseInt(aux[index][1]);
      } else {
        durationMinutes[index] = parseInt(aux[index][0]) * 60;
      }
    }
  });
  let newArray = array.map((e, index) => {
    return { ...e, duration: durationMinutes[index] };
  });
  // console.log('EXERCISE 7 ->', newArray);
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let filteredArray = array.filter((movie) => movie.year === year);
  let bestScore = 0;
  // sort puede funcionar
  filteredArray.forEach((movie) => {
    if (movie.score >= bestScore) {
      bestScore = movie.score;
    }
  });
  let result = filteredArray.filter((movie) => movie.score === bestScore);
  // console.log('EXERCISE 8 ->', result);
  return result;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
