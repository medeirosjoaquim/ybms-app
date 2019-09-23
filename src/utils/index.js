import { useState, useEffect } from 'react';


/**
 *
 * @param {string} property
 * created by Ege Özcan
 */
export const dynamicSort = (property) => {
  let sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

// Hook
export function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
const unique = (value, index, self) => {
  return self.indexOf(value) === index;
}
export const addFavoritesMovies = (id) => {
  let favoriteMovies = localStorage.getItem('@app/favorites/movies');
  if (favoriteMovies !== null) {
    favoriteMovies = favoriteMovies.split(',');
    favoriteMovies.push(id);
    favoriteMovies = favoriteMovies.filter(unique);
    localStorage.setItem('@app/favorites/movies', favoriteMovies);
  } else {
    localStorage.setItem('@app/favorites/movies', [id]);
  }
}

export const removeFavoritesMovies = (id) => {
  let favoriteMovies = localStorage.getItem('@app/favorites/movies');
  if (favoriteMovies !== null) {
    favoriteMovies = favoriteMovies.split(',');
    var index = favoriteMovies.indexOf(id);
  if (index > -1) {
    favoriteMovies.splice(index, 1);
  }
    favoriteMovies = favoriteMovies.filter(unique);
    localStorage.setItem('@app/favorites/movies', favoriteMovies);
  }
}

export const getFavoritesMoviesArray = (id) => {
  return localStorage.getItem('@app/favorites/movies').split(',');
}

export const addFavoritesSeries = (id) => {
  let favoriteSeries = localStorage.getItem('@app/favorites/series');
  if (favoriteSeries !== null) {
    favoriteSeries = favoriteSeries.split(',');
    favoriteSeries.push(id);
    favoriteSeries = favoriteSeries.filter(unique);
    localStorage.setItem('@app/favorites/series', favoriteSeries);
  } else {
    localStorage.setItem('@app/favorites/series', [id]);
  }
}

export const getFavoritesSeriesArray = (id) => {
  return localStorage.getItem('@app/favorites/Series').split(',');
}
//var storedNames = JSON.parse(localStorage.getItem("names"));
