import React from 'react';
import { movies_db } from './Home'; // Import the movie data
import './Favorites.css'; // Import CSS for styling

export function Favorites() {
  // Sort movies by rank
  const sortedMovies = [...movies_db].sort((a, b) => a.rank - b.rank);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-container">
        {sortedMovies.map(movie => (
          <div key={movie.id} className="favorites-item">
            <h5>{movie.rank}. {movie.name}</h5>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Stars:</strong> {movie.rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;




































/*
import React from 'react';


const Favorites = () => {
 const favoriteMovies = [
   { title: 'Inception', rating: 5 },
   { title: 'Interstellar', rating: 4.5 },
   { title: 'The Dark Knight', rating: 5 }
 ];


 return (
   <div className="favorites-page">
     <h1>My Favorite Movies</h1>
     <ul>
       {favoriteMovies.map((movie, index) => (
         <li key={index}>
           {movie.title} - Rating: {movie.rating}
         </li>
       ))}
     </ul>
   </div>
 );
};


export default Favorites;
*/