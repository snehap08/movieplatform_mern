// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const API_KEY = 'd930942893c20d0b31c236c5351bdf80';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [trailer, setTrailer] = useState(null);
//   const [isTrailerOpen, setIsTrailerOpen] = useState(false);

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const response = await fetch(`${BASE_URL}/movie/${id.split('-')[0]}?api_key=${API_KEY}&append_to_response=videos,credits`);
//       const data = await response.json();
//       setMovie(data);

//       const trailerData = data.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
//       setTrailer(trailerData ? `https://www.youtube.com/embed/${trailerData.key}` : null);

//       setLoading(false);
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   if (!movie) return <div>No movie...</div>;

//   const { title, overview, release_date, poster_path, credits } = movie;

//   return (
//     <div className="p-6 bg-primary-color text-white ">
//       <h1 className="text-3xl font-bold mb-2">{title}</h1>
//       <p className="text-lg mt-2">Release Date: {release_date}</p>
//       <div className="flex mt-4">
//         <img src={poster_path ? `${IMG_URL}${poster_path}` : "http://via.placeholder.com/500x750"} alt={title} className="w-1/3 rounded-lg" />
//         <div className="ml-4">
//           <p>{overview}</p>
//           <h2 className="text-xl font-semibold mt-4">Genres:</h2>
//           <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
//           <h2 className="text-xl font-semibold mt-4">Cast:</h2>
//           <ul>
//             {credits.cast.slice(0, 5).map(actor => (
//               <li key={actor.id}>{actor.name}</li>
//             ))}
//           </ul>
//           {trailer && (
//             <button
//               className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-4"
//               onClick={() => setIsTrailerOpen(true)}
//             >
//               Watch Trailer
//             </button>
//           )}
//         </div>
//       </div>

//       {isTrailerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
//           <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl">
//             <div className="flex justify-end p-2">
//               <button onClick={() => setIsTrailerOpen(false)} className="text-black text-2xl">&times;</button>
//             </div>
//             <div className="p-4">
//               <iframe
//                 width="100%"
//                 height="500px"
//                 src={trailer}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDetails;
// import React, { useEffect, useState,useContext } from 'react';
// import { useParams } from 'react-router-dom';


// const API_KEY = 'd930942893c20d0b31c236c5351bdf80';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// const MovieDetails = () => {

//   const { id } = useParams();
//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [trailer, setTrailer] = useState(null);
//   const [isTrailerOpen, setIsTrailerOpen] = useState(false);
 

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       const response = await fetch(`${BASE_URL}/movie/${id.split('-')[0]}?api_key=${API_KEY}&append_to_response=videos,credits`);
//       const data = await response.json();
//       setMovie(data);

//       const trailerData = data.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
//       setTrailer(trailerData ? `https://www.youtube.com/embed/${trailerData.key}` : null);

//       setLoading(false);
//     };

//     fetchMovieDetails();
//   }, [id]);

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   if (!movie) return <div>No movie...</div>;

//   const { title, overview, release_date, poster_path, credits } = movie;

//   return (
//     <div className="p-6 bg-primary-color text-white min-h-screen">
//       <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
//       <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
//         <div className="group w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
//           <img 
//             src={poster_path ? `${IMG_URL}${poster_path}` : "http://via.placeholder.com/500x750"} 
//             alt={title} 
//             className="rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
//           />
//         </div>
//         <div className="md:ml-6 flex flex-col justify-between w-full md:w-2/3 mt-5">
//         <h2 className="text-xl font-semibold">Release Date: </h2>
//           <p className="text-lg mb-4">{release_date}</p>
//         <h2 className="text-xl font-semibold">Overview: </h2>
//           <p className="text-lg mb-4">{overview}</p>
//           <div>
//             <h2 className="text-xl font-semibold">Genres:</h2>
//             <p className="text-lg mb-4">{movie.genres.map(genre => genre.name).join(', ')}</p>
//             <h2 className="text-xl font-semibold">Cast:</h2>
//             <ul className="text-lg mb-4">
//               {credits.cast.slice(0, 5).map(actor => (
//                 <li key={actor.id}>{actor.name}</li>
//               ))}
//             </ul>
//           </div>
//           {trailer && (
//             <button
//               className="bg-orange-600 text-white font-bold py-2 px-4 rounded-full mt-4 w-48 transition-colors duration-300 hover:bg-orange-700"
//               onClick={() => setIsTrailerOpen(true)}
//             >
//               Watch Trailer
//             </button>
//           )}
           
//         </div>
//       </div>
      
//       {isTrailerOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl shadow-lg">
//             <div className="flex justify-end p-2">
//               <button onClick={() => setIsTrailerOpen(false)} className="text-black text-2xl">&times;</button>
//             </div>
//             <div className="p-4">
//               <iframe
//                 width="100%"
//                 height="500px"
//                 src={trailer}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addFavorite, removeFavorite, checkFavorite } from '../api/favorites'; // Adjust import as needed

const API_KEY = 'd930942893c20d0b31c236c5351bdf80';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const MovieDetails = () => {
  const [addes , setAdded] = useState(false)
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
const postfavourite =()=>{
  fetch('http://localhost:5000/api/favourite',{
    method:"post",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({
       id: movie.id,
       poster:movie.poster_path,
       title:movie.original_title || movie.original_name

      })

    
  }).then(res=>res.json()).then(data=>console.log(data))
setAdded(!addes)
  

}
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits`);
        const data = await response.json();
        console.log(data)
        setMovie(data);

        const trailerData = data.videos.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        setTrailer(trailerData ? `https://www.youtube.com/embed/${trailerData.key}` : null);

        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const checkIfFavorite = async () => {
      if (!movie) return; // Ensure movie is not null

      try {
        const response = await checkFavorite(movie.id);
        setIsFavorite(response.data.isFavorite); // Adjust based on your API response
      } catch (error) {
        console.error('Failed to check favorites', error);
      }
    };

    checkIfFavorite();
  }, [movie]);

  const toggleFavorite = async () => {
    if (!movie) return; // Ensure movie is not null
    
    
  
    try {
      if (isFavorite) {
        await removeFavorite(movie.id);
      } else {
        await addFavorite(movie.id);
        console.log("added")
      }
      setIsFavorite(!isFavorite);
      console.log("set")
    } catch (error) {
      console.error('Failed to toggle favorite', error);
    }
  };

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!movie) return <div>No movie...</div>;

  const { title, overview, release_date, poster_path, credits } = movie;

  return (
    <div className="p-6 bg-primary-color text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
        <div className="group w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
          <img 
            src={poster_path ? `${IMG_URL}${poster_path}` : "http://via.placeholder.com/500x750"} 
            alt={title} 
            className="rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
          />
        </div>
        <div className="md:ml-6 flex flex-col justify-between w-full md:w-2/3 mt-5">
          <h2 className="text-xl font-semibold">Release Date:</h2>
          <p className="text-lg mb-4">{release_date}</p>
          <h2 className="text-xl font-semibold">Overview:</h2>
          <p className="text-lg mb-4">{overview}</p>
          <div>
            <h2 className="text-xl font-semibold">Genres:</h2>
            <p className="text-lg mb-4">{movie.genres.map(genre => genre.name).join(', ')}</p>
            <h2 className="text-xl font-semibold">Cast:</h2>
            <ul className="text-lg mb-4">
              {credits.cast.slice(0, 5).map(actor => (
                <li key={actor.id}>{actor.name}</li>
              ))}
            </ul>
          </div>
          {trailer && (
            <button
              className="bg-orange-600 text-white font-bold py-2 px-4 rounded-full mt-4 w-48 transition-colors duration-300 hover:bg-orange-700"
              onClick={() => setIsTrailerOpen(true)}
            >
              Watch Trailer
            </button>
          )}
          <button
            className={`bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 w-48 transition-colors duration-300 ${isFavorite ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
            onClick={postfavourite}
          >
            {addes ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>
      
      {isTrailerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl shadow-lg">
            <div className="flex justify-end p-2">
              <button onClick={() => setIsTrailerOpen(false)} className="text-black text-2xl">&times;</button>
            </div>
            <div className="p-4">
              <iframe
                width="100%"
                height="500px"
                src={trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
