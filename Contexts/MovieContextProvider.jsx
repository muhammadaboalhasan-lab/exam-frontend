import { MovieContext } from './MovieContext';
import { useState } from 'react';

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
