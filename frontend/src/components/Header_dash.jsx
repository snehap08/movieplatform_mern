// Header.jsx
import React from 'react';

const Header = ({ handleSearch }) => {
  return (
    <header className="p-4 flex justify-between items-center bg-secondary-color">
      <div className="flex-shrink-0">
        <img src="/images/logo.png" alt="Logo" className="h-24 w-60" />
      </div>
      
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
    </header>
  );
};

export default Header;
