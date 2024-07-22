// RightSidebar.jsx
// import React from 'react';

// const RightSidebar = () => {
//   return (
//     <aside className="w-64 bg-dark-color text-white p-4">
//       <div className="flex items-center space-x-4 mb-8">
//         <img src="/images/profile.jpeg" alt="Profile" className="h-9 w-8 rounded-full" />
//         <div>
//           <h2 className="text-lg font-bold">Samantha</h2>
//         </div>
//       </div>
//       <section className="mb-8">
//         <h3 className="text-lg font-bold mb-4">Favorites</h3>
//         {/* Add Continue Watching Items here */}
//       </section>
//       <section className="mb-8">
//         <h3 className="text-lg font-bold mb-4">Genres</h3>
//         {/* Add Genres Items here */}
//       </section>
//     </aside>
//   );
// };

// export default RightSidebar;


// RightSidebar.jsx
import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';  


const RightSidebar = ({ genres, onGenreClick, selectedGenre, clearSelection, handleLogout }) => {
  const [showGenres, setShowGenres] = useState(false);
  const { user } = useUser();
  const handleGenreClick = (id) => {
    onGenreClick(id);
  };
  const navigate=useNavigate()

  return (
    <aside className="w-64 bg-dark-color text-white p-4">
      <div className="flex items-center space-x-4 mb-8">
        <img src="/images/profile.jpeg" alt="Profile" className="h-9 w-8 rounded-full" />
        <div>
          <h2 className="text-lg font-bold">{user ? user.username : 'User'}</h2>
        </div>
      </div>
      <button onClick={handleLogout} className="bg-red-500 text-white text-center font-bold py-2 px-4 rounded-full mb-4 w-6/12 transition-colors duration-300 hover:bg-red-600">Logout</button>
      <section >
     
        <button className="bg-green-500 text-white text-center font-bold py-2 px-4 rounded-full mb-4 w-6/12 transition-colors duration-300 hover:bg-green-600" onClick={()=>navigate('/favourite')} >Favorites </button>
    
      </section>
      <section className="mb-8">
        <button className="bg-blue-500 text-white text-center font-bold py-2 px-4 rounded-full mb-4 w-6/12 transition-colors duration-300 hover:bg-blue-600" onClick={() => setShowGenres(!showGenres)}>Genres</button>
        {showGenres && (
          <div>

            {selectedGenre.length > 0 && (
              <button
                className="block w-full text-left px-4 py-2 m-1 rounded bg-red-500 hover:bg-red-400"
                onClick={clearSelection}
              >
                Clear x
              </button>
            )}
            {genres.map(genre => (
              <button
                key={genre.id}
                className={`block w-full text-left px-4 py-2 m-1 rounded ${selectedGenre.includes(genre.id) ? 'bg-orange-500' : 'bg-gray-600'} hover:bg-gray-500`}
                onClick={() => handleGenreClick(genre.id)}
              >
                {genre.name}
              </button>
            ))}
            
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
