import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import AllMovies from './pages/AllMovies';
import { useEffect } from 'react';
import NotFound from './pages/NotFound';
import AddMovies from './pages/AddMovies';
import SearchMovies from './pages/SearchMovies';
function App() {
  useEffect(() => {
    {
      const fetchData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_KEY}/`);
        const data = await res.json();
        console.log(data);
      };

      fetchData();
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/allMovies" />} />
        <Route path="/allMovies" element={<AllMovies />} />
        <Route path="/addNewMovie" element={<AddMovies />} />
        <Route path="/searchMovie" element={<SearchMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
