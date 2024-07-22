// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Pagination from './components/Pagination';
import Overlay from './components/Overlay';
import {Router, Route, Routes, useNavigate } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Dashboard from './components/Dashboard';
import AuthProvider from './contexts/AuthContext.jsx';
import { UserProvider } from './contexts/UserContext';
import Favorites from './components/Favorites';


const API_KEY = 'api_key=d930942893c20d0b31c236c5351bdf80';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}`;
const searchURL = `${BASE_URL}/search/movie?${API_KEY}`;

const genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastUrl, setLastUrl] = useState(API_URL);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayMovie, setOverlayMovie] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  const getMovies = async (url) => {
    setLastUrl(url);
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    setSelectedGenre([]);
    if (searchTerm) {
      getMovies(`${searchURL}&query=${searchTerm}`);
    } else {
      getMovies(API_URL);
    }
  };

  const handleGenreClick = (id) => {
    const newSelectedGenre = selectedGenre.includes(id)
      ? selectedGenre.filter(g => g !== id)
      : [...selectedGenre, id];
    setSelectedGenre(newSelectedGenre);
    const genreUrl = newSelectedGenre.length ? `${BASE_URL}/discover/movie?${API_KEY}&with_genres=${newSelectedGenre.join(',')}` : API_URL;
    getMovies(genreUrl);
  };

  const clearSelection = () => {
    setSelectedGenre([]);
    getMovies(API_URL);
  };

  const openOverlay = (movie) => {
    setOverlayMovie(movie);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayMovie(null);
    setIsOverlayOpen(false);
  };

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.id}-${movie.title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  const pageCall = (page) => {
    if (page > 0 && page <= totalPages) {
      const urlSplit = lastUrl.split('?');
      const queryParams = urlSplit[1].split('&');
      const pageParam = `page=${page}`;
      const newQueryParams = queryParams.some(param => param.startsWith('page=')) ? queryParams.map(param => param.startsWith('page=') ? pageParam : param) : [...queryParams, pageParam];
      const url = `${urlSplit[0]}?${newQueryParams.join('&')}`;
      getMovies(url);
    }
  };


  return (
    <AuthProvider>
      <UserProvider>
    <div className="bg-primary-color min-h-screen text-white">
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header handleSearch={handleSearch}
                 genres={genres}
                 onGenreClick={handleGenreClick}
                 selectedGenre={selectedGenre}
                 clearSelection={clearSelection} />
                <Main movies={movies} onMovieClick={handleMovieClick} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  prevPage={currentPage - 1}
                  nextPage={currentPage + 1}
                  pageCall={pageCall}
                />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/favourite" element={<Favorites/>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
     
        {overlayMovie && (
          <Overlay movie={overlayMovie} isOpen={isOverlayOpen} closeOverlay={closeOverlay} />
        )}
      </div>
      </UserProvider>
      </AuthProvider>
  );
};

console.log("jello00");


export default App;