import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import { useEffect } from 'react';

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
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
