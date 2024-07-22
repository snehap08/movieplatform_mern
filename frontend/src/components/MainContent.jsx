// MainContent.jsx
import React from 'react';
import Movie from './Movie';

const MainContent = ({ movies, onMovieClick  }) => {
  return (
    <main className="flex-grow p-4">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Popular on TinyMoviez</h2>
        <div className="grid grid-cols-3 gap-4">
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} openOverlay={onMovieClick} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;
