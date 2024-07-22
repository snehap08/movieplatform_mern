import axios from 'axios';

const API_URL = '/api/movies/favorites';

// Add movie to favorites
export const addFavorite = async (movie) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(API_URL, movie, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to add favorite', error);
    throw error;
  }
};

// Get favorite movies
export const getFavorites = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch favorites', error);
    throw error;
  }
};

// Remove movie from favorites
export const removeFavorite = async (movieId) => {
  try {
    const token = localStorage.getItem('token');
    await axios.delete(`${API_URL}/${movieId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.error('Failed to remove favorite', error);
    throw error;
  }
};

export const checkFavorite = async (movieId) => {
  return axios.get(`${API_URL}/favorites/${movieId}`);
};
