import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${SEARCH_URL}&query=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
