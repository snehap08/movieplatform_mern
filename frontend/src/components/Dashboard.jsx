// Dashboard.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header_dash';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import Pagination from './Pagination';
import { useAuth } from '../contexts/AuthContext.jsx';
import { UserProvider } from '../contexts/UserContext';

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

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [lastUrl, setLastUrl] = useState(API_URL);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [overlayMovie, setOverlayMovie] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
    // Fetch movies data
    fetchMovies(API_URL);
  }, [navigate]);

  const fetchMovies = async (url) => {
    // Implement your API call here to fetch movies
    setLastUrl(url);
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setCurrentPage(data.page);
    setTotalPages(data.total_pages);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    const searchTerm = e.target.search.value;
    setSelectedGenre([]);
    if (searchTerm) {
      fetchMovies(`${searchURL}&query=${searchTerm}`);
    } else {
      fetchMovies(API_URL);
    }
  };

  const handleGenreClick = (id) => {
    const newSelectedGenre = selectedGenre.includes(id)
      ? selectedGenre.filter(g => g !== id)
      : [...selectedGenre, id];
    setSelectedGenre(newSelectedGenre);
    const genreUrl = newSelectedGenre.length ? `${BASE_URL}/discover/movie?${API_KEY}&with_genres=${newSelectedGenre.join(',')}` : API_URL;
    fetchMovies(genreUrl);
  };

  const clearSelection = () => {
    setSelectedGenre([]);
    fetchMovies(API_URL);
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
      fetchMovies(url);
    }

  };  

  return (
    <div className="flex min-h-screen bg-dark-primary-color">
      <div className="flex-grow flex flex-col">
        <Header handleSearch={handleSearch} />
        <MainContent movies={movies} onMovieClick={handleMovieClick} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={currentPage - 1}
          nextPage={currentPage + 1}
          pageCall={pageCall}
        />
      </div>
      
      <RightSidebar
        genres={genres}
        onGenreClick={handleGenreClick}
        selectedGenre={selectedGenre}
        clearSelection={clearSelection}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Dashboard;
