# Movie Explorer

A full-stack movie explorer application built using the MERN stack.

## Features

- User Authentication: Signup and Signin
- Home Page: Displays popular/trending movies and a search bar
- Movie Details Page: Comprehensive details about a movie
- Dashboard: User-specific information and favorite movies management
- Add/Remove Movies from Favorites

## Technologies Used

- MongoDB 
- Express.js
- React.js
- Node.js
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (>= 12.x)
- MongoDB account

### Installation and Setup

1. **Clone the repository from github**
   
### Install dependencies for both server and client:


- cd server
- npm install
- cd ../client
- npm install


### Run the application:

Open two terminal windows.

1. In the first terminal:

- cd server
- npm start
The server will run on http://localhost:5000.

2.In the second terminal:

- cd client
- npm start
The client will run on http://localhost:5173.

### API Endpoints
- POST /api/auth/signup - User signup
- POST /api/auth/signin - User signin
- POST /api/movies/favorites/:id - Add a movie to favorites
- DELETE /api/movies/favorites/:id - Remove a movie from favorites
- GET /api/movies/favorites/:id - Check if a movie is in favorites

### License
This project is licensed under the @MIT License - see the LICENSE file for details.

Acknowledgements
- TMDB API for movie data
- MongoDB Atlas for the database
- Tailwind CSS for styling
