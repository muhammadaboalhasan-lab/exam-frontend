import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { useMovie } from '@/Hooks/useMovie';
import Spinner from '@/components/ui/Spinner';
import { movieCardStyles as s } from './movieCardStyle';

function MovieCard({ movie }) {
  const { deleteMovie } = useMovie();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);
    await deleteMovie(movie.id);
  };

  return (
    <div className={s.card}>
      {deleting && (
        <div className={s.overlay}>
          <Spinner label="Deleting…" className={s.spinnerWrap} />
        </div>
      )}
      <div className={s.header}>
        <h3 className={s.title}>{movie.title}</h3>
        <span className={s.badge}>{movie.genre}</span>
      </div>
      <p className={s.desc}>{movie.description}</p>
      <button
        className={`${s.deleteBtn} ${deleting ? s.deleteBtnDisabled : ''}`}
        onClick={handleDelete}
        disabled={deleting}
      >
        <Trash2 size={16} />
        Delete Movie
      </button>
    </div>
  );
}

export default MovieCard;
