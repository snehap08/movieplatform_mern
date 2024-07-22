// src/components/Main.jsx
import React from 'react';
import Movie from './Movie';

const Main = ({ movies, onMovieClick }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} openOverlay={onMovieClick} />
      ))} 
    </div>
  );
};

export default Main;
