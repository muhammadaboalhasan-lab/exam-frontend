import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import AllMovies from './pages/AllMovies';
import NotFound from './pages/NotFound';
import AddMovies from './pages/AddMovies';
import SearchMovies from './pages/SearchMovies';
import MovieContextProvider from './Contexts/MovieContextProvider';
import Aside from './components/aside/Aside';
import { appStyles } from './appStyle';

function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <div className={appStyles.layout}>
          <Aside />
          <main className={appStyles.main}>
            <Routes>
              <Route path="/" element={<Navigate to="/allMovies" />} />
              <Route path="/allMovies" element={<AllMovies />} />
              <Route path="/addNewMovie" element={<AddMovies />} />
              <Route path="/searchMovie" element={<SearchMovies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
