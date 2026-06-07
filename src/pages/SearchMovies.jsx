import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useMovie } from '@/Hooks/useMovie';
import MovieCard from '@/components/movie/MovieCard';
import Spinner from '@/components/ui/Spinner';
import { searchMoviesStyles as s } from './searchMoviesStyle';

function SearchMovies() {
  const { searchResults, searchLoading, searchError, searchMovies } =
    useMovie();
  const [query, setQuery] = useState('');

  const term = query.trim();

  useEffect(() => {
    const timer = setTimeout(() => {
      searchMovies(query);
    }, 400);
    return () => clearTimeout(timer);
  }, [query, searchMovies]);

  const renderResults = () => {
    if (!term) return null;
    if (searchLoading) return <Spinner label="Searching…" />;
    if (searchError) return <div className={s.error}>{searchError}</div>;
    if (searchResults.length === 0)
      return <div className={s.empty}>No movies found for “{term}”.</div>;

    return (
      <>
        <p className={s.count}>
          {searchResults.length} result
          {searchResults.length !== 1 ? 's' : ''} for “{term}”
        </p>
        <div className={s.grid}>
          {searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  };

  return (
    <section>
      <div className={s.header}>
        <h1 className={s.title}>Search Movie</h1>
        <p className={s.subtitle}>Search by title, genre, or description.</p>
      </div>

      <div className={s.searchWrap}>
        <Search size={18} className={s.searchIcon} />
        <input
          className={s.input}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies…"
        />
      </div>

      {renderResults()}
    </section>
  );
}

export default SearchMovies;
