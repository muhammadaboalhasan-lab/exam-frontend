import { NavLink } from 'react-router';

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-neutral-900">404</h1>
      <p className="mt-2 text-neutral-500">Page Not Found</p>
      <NavLink
        to="/allMovies"
        className="mt-6 rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
      >
        Back to All Movies
      </NavLink>
    </div>
  );
}

export default NotFound;
