const Overlay = ({ movie, isOpen, closeOverlay }) => {
    console.log(movie); // Add this line to check what movie data is being passed
  
    return (
      <div id="myNav" className={`overlay ${isOpen ? 'w-full' : 'w-0'}`}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeOverlay}>&times;</a>
        <div className="overlay-content">
          {movie && (
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
              {/* Display other movie details here */}
            </div>
          )}
        </div>
      </div>
    );
  };
  