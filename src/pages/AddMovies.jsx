import { useState } from 'react';
import { PlusCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import { useMovie } from '@/Hooks/useMovie';
import Spinner from '@/components/ui/Spinner';
import { addMoviesStyles as s } from './addMoviesStyle';

const genres = ['Sci-Fi', 'Drama', 'Action', 'Thriller', 'Comedy', 'Horror'];

function AddMovies() {
  const { addMovie, generateDescription, aiLoading, aiError } = useMovie();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', genre: '', description: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleGenerate = async () => {
    const text = await generateDescription({
      title: form.title,
      genre: form.genre,
    });
    if (text) setForm((prev) => ({ ...prev, description: text }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await addMovie(form);
    navigate('/allMovies');
  };

  const canGenerate = form.title.trim() && form.genre && !aiLoading;

  return (
    <section>
      <div className={s.header}>
        <h1 className={s.title}>Add New Movie</h1>
        <p className={s.subtitle}>
          Fill in the details to add a movie to your watchlist.
        </p>
      </div>

      <form className={s.card} onSubmit={handleSubmit}>
        {submitting && (
          <div className={s.overlay}>
            <Spinner label="Adding movie…" className={s.spinnerWrap} />
          </div>
        )}
        <div className={s.field}>
          <label className={s.label}>Movie Title</label>
          <input
            className={s.input}
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="e.g. The Matrix"
            required
          />
        </div>

        <div className={s.field}>
          <label className={s.label}>Genre</label>
          <select
            className={s.input}
            name="genre"
            value={form.genre}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a genre
            </option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div className={s.field}>
          <div className={s.labelRow}>
            <label className={s.label}>Short Description</label>
            <button
              type="button"
              className={s.aiBtn}
              onClick={handleGenerate}
              disabled={!canGenerate}
              title={
                canGenerate
                  ? 'Generate a description with AI'
                  : 'Add a title and genre first'
              }
            >
              <Sparkles size={14} />
              {aiLoading ? 'Generating…' : 'Generate description from AI'}
            </button>
          </div>
          <textarea
            className={s.textarea}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief summary of the movie…"
          />
          {aiError && <p className={s.aiError}>{aiError}</p>}
          {form.description && (
            <div className={s.preview}>
              <p className={s.previewLabel}>Preview</p>
              <div className={s.prose}>
                <ReactMarkdown>{form.description}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className={`${s.submit} ${submitting ? s.submitDisabled : ''}`}
          disabled={submitting}
        >
          <PlusCircle size={18} />
          Add Movie
        </button>
      </form>
    </section>
  );
}

export default AddMovies;
