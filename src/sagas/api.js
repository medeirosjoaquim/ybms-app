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

export const testRequest = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users", {'headers': {'Authorization': 'Teste'}});
    console.log(response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
// theMovieDbAuth
// Generate a new request token
export const getMoviesList = async () => {
  try {
    const response = await axios.get( moviesListUrl, requestHeaders);
   // console.log('Get movies list', response)
    return response
  } catch (e) {
    console.log(e);
  }
};

export const getSeriesList = async () => {
  try {
    const response = await axios.get( seriesListUrl, requestHeaders);
    //console.log('Get series list', response)
    return response
  } catch (e) {
    console.log(e);
  }
};

