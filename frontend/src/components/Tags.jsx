// import React from 'react';

// const Tags = ({ genres, selectedGenre, handleGenreClick, clearSelection }) => {
//   return (
//     <div id="tags" className="flex flex-wrap justify-center items-center mx-auto">
//       {genres.map(genre => (
//         <div 
//           key={genre.id} 
//           className={`tag ${selectedGenre.includes(genre.id) ? 'bg-red-500' : 'bg-orange-500'} p-4 rounded-full m-2 cursor-pointer`} 
//           onClick={() => handleGenreClick(genre.id)}
//         >
//           {genre.name}
//         </div>
//       ))}
//       {selectedGenre.length > 0 && (
//         <div className="tag highlight p-4 bg-red-500 rounded-full m-2 cursor-pointer" onClick={clearSelection}>
//           Clear x
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tags;





// Tags.jsx
import React from 'react';

const Tags = ({ genres, selectedGenre, handleGenreClick, clearSelection }) => {
  return (
    <div id="tags" className="flex flex-wrap justify-center items-center mx-auto">
      {genres.map(genre => (
        <div 
          key={genre.id} 
          className={`tag ${selectedGenre.includes(genre.id) ? 'bg-red-500' : 'bg-orange-500'} p-2 rounded-full m-2 cursor-pointer`} 
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.name}
        </div>
      ))}
      {selectedGenre.length > 0 && (
        <div className="tag highlight p-2 bg-red-500 rounded-full m-2 cursor-pointer" onClick={clearSelection}>
          Clear x
        </div>
      )}
    </div>
  );
};

export default Tags;
