import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tags from './Tags';

const Header = ({ handleSearch, genres, onGenreClick, selectedGenre, clearSelection }) => {
  const [showGenres, setShowGenres] = useState(false);

  const handleGenreClick = (id) => {
    onGenreClick(id);
  };

  return (
    <header className="p-4 flex justify-between items-center bg-secondary-color">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/images/logo.png" alt="Logo" className="h-24 w-60" />
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-4 flex justify-center">
        <form id="form" onSubmit={handleSearch} className="w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            id="search"
            className="w-full bg-transparent border-2 border-primary-color p-2 rounded-full text-black placeholder-light-gray focus:outline-none focus:bg-primary-color"
          />
        </form>
      </div>

      {/* Genre Dropdown */}
      <div className="relative">
        {/* Genre Tags */}
      <div className="flex flex-col items-center">
        <button
          className="bg-orange-500 text-white text-center font-bold py-2 px-4 rounded-full mb-4 w-12/12 transition-colors duration-300 hover:bg-orange-600"
          onClick={() => setShowGenres(!showGenres)}
        >
          Genres
        </button>
        {showGenres && (
          <Tags
            genres={genres}
            selectedGenre={selectedGenre}
            handleGenreClick={handleGenreClick}
            clearSelection={clearSelection}
          />
        )}
      </div>
      </div>

      {/* Login/Signup */}
      <div className="flex items-center mx-4 space-x-4">
        <Link to="/signin">
          <button className="bg-blue-500 text-white text-center font-bold py-2 px-4 rounded-full mb-4 w-12/12 transition-colors duration-300 hover:bg-blue-600">Login</button>
        </Link>
        <Link to="/signup">
          <button className="bg-green-500 text-white text-center font-bold py-2 px-4 rounded-full mb-4 w-12/12 transition-colors duration-300 hover:bg-green-600">Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
