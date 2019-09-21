import axios from 'axios';

const accessToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjhmNjAzNmUzMWU2YTJhYTVhZjIwYzI2MTE0MTM4MSIsInN1YiI6IjVkODI4MjQwZjY3ODdhMDAxNTllNDg0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kk8r1u6ykCvdKrMHOfwaO7LYnyqxC2axf1S_oGI9wIY'

const requestHeaders = {
  'headers': {
    'authorization': accessToken,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

const moviesListUrl = 'https://api.themoviedb.org/4/list/121792?page=1'

const seriesListUrl = 'https://api.themoviedb.org/4/list/121793?page=1'

/**
 * themoviedb api - get movies list
 */

export const getMoviesList = async () => {
  try {
    const response = await axios.get( moviesListUrl, requestHeaders);
    return response
  } catch (e) {
    console.log(e);
  }
};

/**
 * themoviedb api - get series list
 */

export const getSeriesList = async () => {
  try {
    const response = await axios.get( seriesListUrl, requestHeaders);
    return response
  } catch (e) {
    console.log(e);
  }
};