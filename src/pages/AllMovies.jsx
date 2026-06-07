import { useMovie } from '@/Hooks/useMovie';
import MovieCard from '@/components/movie/MovieCard';
import Spinner from '@/components/ui/Spinner';
import { allMoviesStyles as s } from './allMoviesStyle';

function AllMovies() {
  const { movies, loading, error, mounted } = useMovie();

  const renderContent = () => {
    if (loading) return <Spinner label="Loading movies…" />;
    if (error) return <div className={s.error}>{error}</div>;
    if (movies.length === 0 && !loading && mounted)
      return <div className={s.empty}>No movies yet. Add your first one!</div>;

    return (
      <div className={s.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };

  return (
    <section>
      <div className={s.header}>
        <h1 className={s.title}>All Movies</h1>
        <p className={s.subtitle}>{movies.length} movies in your watchlist</p>
      </div>

      {renderContent()}
    </section>
  );
}

export default AllMovies;
