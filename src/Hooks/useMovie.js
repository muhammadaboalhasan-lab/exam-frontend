import { useContext } from 'react';
import { MovieContext } from '../Contexts/MovieContext';

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovie must be used within a MovieContextProvider');
  }
  return context;
};
