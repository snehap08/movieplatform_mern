import React from 'react';

const Overlay = ({ movie, isOpen, closeOverlay }) => {
  if (!isOpen) return null;

  return (
    <div id="myNav" className={`overlay ${isOpen}`}>
      <a href="javascript:void(0)" className="closebtn" onClick={closeOverlay}>&times;</a>
      <div className="overlay-content">
      <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <button className="absolute top-5 right-10 font-bold text-black text-2xl" onClick={closeOverlay}>&times;</button>
        <h2 className="text-2xl text-black font-bold mb-4">{movie.title}</h2>
        <p className=" text-black">{movie.overview}</p>
      </div>
    </div>
      </div>
    </div>
  );
};


export default Overlay;
