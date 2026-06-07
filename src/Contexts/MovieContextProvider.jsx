import { MovieContext } from './MovieContext';
import { useState, useEffect, useCallback } from 'react';

const API_URL = `${import.meta.env.VITE_BACKEND_API_KEY}/movies`;
const API_AI_URL = `${import.meta.env.VITE_BACKEND_API_KEY}/ai`;

const MovieContextProvider = ({ children }) => {
  const [mounted, setMounted] = useState(true);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch movies');
        const json = await res.json();
        setMovies(json.data ?? []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
        setMounted(false);
      }
    };
    fetchMovies();
  }, []);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch movies');
      const json = await res.json();
      setMovies(json.data ?? []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addMovie = useCallback(async (movie) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!res.ok) throw new Error('Failed to add movie');
      const json = await res.json();
      setMovies((prev) => [...prev, json.data]);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const deleteMovie = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete movie');
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const searchMovies = useCallback(async (name) => {
    const term = name.trim();
    if (!term) {
      setSearchResults([]);
      setSearchError(null);
      return;
    }

    try {
      setSearchLoading(true);
      setSearchError(null);
      const res = await fetch(
        `${API_URL}/search?name=${encodeURIComponent(term)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: term }),
        },
      );
      const json = await res.json();
      if (!res.ok || json.status !== 'success') {
        throw new Error(json.message || 'Failed to search movies');
      }
      setSearchResults(json.data ?? []);
    } catch (err) {
      setSearchError(err.message);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  }, []);

  const generateDescription = useCallback(async ({ title, genre }) => {
    try {
      setAiLoading(true);
      setAiError(null);
      const prompt = `Generate a short, engaging movie description. Title: "${title}". Genre: "${genre}".`;
      const res = await fetch(`${API_AI_URL}/generate-text`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const json = await res.json();
      if (!res.ok || json.status !== 'success') {
        throw new Error(json.message || 'Failed to generate description');
      }
      return json.data;
    } catch (err) {
      setAiError(err.message);
      return null;
    } finally {
      setAiLoading(false);
    }
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        mounted,
        loading,
        error,
        fetchMovies,
        addMovie,
        deleteMovie,
        searchResults,
        searchLoading,
        searchError,
        searchMovies,
        aiLoading,
        aiError,
        generateDescription,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
