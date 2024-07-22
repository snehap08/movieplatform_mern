// import React from 'react';

// const Movie = ({ movie, openOverlay }) => {
//   const { title, poster_path, vote_average, overview, id } = movie;
//   const IMG_URL = 'https://image.tmdb.org/t/p/w500';

//   return (
//     <div className="relative w-72 m-4 rounded shadow-lg bg-secondary-color overflow-hidden group">
//       <img src={poster_path ? `${IMG_URL}${poster_path}` : "http://via.placeholder.com/1080x1580"} alt={title} />
//       <div className="movie-info text-black flex justify-between items-center p-4 font-bold">
//         <h3>{title}</h3>
//         <span className={`bg-primary-color p-2 rounded font-bold ${vote_average >= 7 ? 'text-green-600' : vote_average >= 5 ? 'text-orange-600' : 'text-red-600'}`}>{vote_average}</span>
//       </div>
//       <div className="absolute left-0 right-0 bottom-0 bg-white text-black p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//         <strong><h3>Overview</h3></strong>
//         <p>{overview}</p>
//         <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2" id={id} onClick={() => {
//   console.log('Button clicked', movie);
//   openOverlay(movie);
// }}>
//   Know More
// </button>

//       </div>
//     </div>
//   );
// };

// export default Movie;



// Movie.jsx
import React from 'react';

const Movie = ({ movie, openOverlay }) => {
  const { title, poster_path, vote_average, overview, id } = movie;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className="relative w-72 m-4 rounded-lg shadow-lg bg-secondary-color overflow-hidden group transform transition-transform duration-300 hover:scale-105">
      <img className="w-full h-auto object-cover" src={poster_path ? `${IMG_URL}${poster_path}` : "http://via.placeholder.com/1080x1580"} alt={title} />
      <div className="movie-info flex justify-between items-center p-4 font-bold text-white bg-gradient-to-t from-black via-black to-black absolute bottom-0 left-0 right-0">
        <h3 className="text-xl truncate">{title}</h3>
        <span className={`text-lg p-2 rounded-lg ${vote_average >= 7 ? 'bg-green-600' : vote_average >= 5 ? 'bg-orange-600' : 'bg-red-600'}`}>{vote_average}</span>
      </div>
      <div className="absolute left-0 right-0 bottom-0 bg-gray-900 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <strong><h3 className="text-lg">Overview</h3></strong>
        <p className="text-sm truncate max-h-24 overflow-hidden">{overview}</p>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2 w-full hover:bg-orange-600 transition-colors duration-300" id={id} onClick={() => openOverlay(movie)}>
          Know More
        </button>
      </div>
    </div>
  );
};

export default Movie;
