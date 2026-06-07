import { NavLink } from 'react-router';
function Aside() {
  return (
    <nav>
      <NavLink to="/allMovies">All Movies</NavLink>
      <NavLink to="/addNewMovie">Add New Movie</NavLink>
      <NavLink to="/searchMovie">Search Movie</NavLink>
    </nav>
  );
}
export default Aside;
