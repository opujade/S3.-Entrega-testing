// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  // console.log('EXERCICE 1 ->', result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movies) => movies.director === director);
  // console.log('EXERCICE 2 ->', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter(
    (movies) => movies.director === director
  );
  let totalScore = 0;
  moviesFromDirector.forEach(
    (movie) => (totalScore += parseFloat(movie.score))
  );
  let result = parseFloat((totalScore / moviesFromDirector.length).toFixed(2));
  // console.log('EXERCICE 3 ->', result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map((movie) => movie.title);
  result.sort();
  if (result.length > 20) {
    result.length = 20;
  }
  // console.log('EXERCICE 4 ->', result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
    .sort((a, b) => a.year - b.year)
    .map((value) => value);
  // console.log('EXERCICE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let arrayGenre = [];
  array.forEach((movie) => {
    if (movie.genre.includes(genre)) {
      arrayGenre.push(movie);
    }
  });
  let totalScore = 0;
  arrayGenre.forEach((movie) => {
    totalScore += parseFloat(movie.score);
  });
  let average = (totalScore / arrayGenre.length).toFixed(2);
  // console.log('EXERCICE 6 ->', average);
  return parseFloat(average);
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
  console.log('EXERCISE 7 ->', newArray);
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

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
