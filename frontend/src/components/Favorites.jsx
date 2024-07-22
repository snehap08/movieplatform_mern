import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/allfavourites', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log(data);
        setFavorites(data);
      } catch (error) {
        console.error('Failed to fetch favorites', error);
      }
    };

    fetchFavorites();
  }, []);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const handleRemove = async (movieId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/delfavourite/${movieId}`, {
        method: "DELETE",  // Correct method for deletion
        headers: {
          "Content-Type": "application/json",
        },
      });
      const msg = await response.json();
      console.log(msg);

      // Update the state after removal
      setFavorites(favorites.filter((movie) => movie.movieId !== movieId));
    } catch (error) {
      console.error('Failed to remove favorite', error);
    }
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="flex flex-wrap">
        {favorites.length === 0 ? (
          <p>No favorites found</p>
        ) : (
          favorites.map((movie) => (
            <div key={movie.movieId} className="relative w-72 m-4 rounded-lg shadow-lg bg-secondary-color overflow-hidden group transform transition-transform duration-300 hover:scale-105">
              <img 
                className="w-full h-auto object-cover"
                src={`${IMG_URL}${movie.poster}`}
                alt={movie.title}
              />
              <div className="movie-info flex justify-between items-center p-4 font-bold text-white bg-gradient-to-t from-black via-black to-black absolute bottom-0 left-0 right-0">
                <h3 className="text-xl truncate">{movie.title}</h3>
                <span className={`text-lg p-2 rounded-lg ${movie.vote_average >= 7 ? 'bg-green-600' : movie.vote_average >= 5 ? 'bg-orange-600' : 'bg-red-600'}`}>
                  {movie.vote_average}
                </span>
              </div>
              <div className="absolute left-0 right-0 bottom-0 bg-gray-900 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <strong><h3 className="text-lg">Overview</h3></strong>
                <p className="text-sm truncate max-h-24 overflow-hidden">{movie.overview}</p>
                <button 
                  className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2 w-full hover:bg-orange-600 transition-colors duration-300"
                  onClick={() => handleRemove(movie.movieId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
