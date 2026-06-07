import { NavLink } from 'react-router';
import { Film, LayoutGrid, Plus, Search } from 'lucide-react';
import { asideStyles } from './asideStyle';

const links = [
  { to: '/allMovies', label: 'All Movies', icon: LayoutGrid },
  { to: '/addNewMovie', label: 'Add New Movie', icon: Plus },
  { to: '/searchMovie', label: 'Search Movie', icon: Search },
];

function Aside() {
  return (
    <aside className={asideStyles.aside}>
      <div>
        <div className={asideStyles.brand}>
          <span className={asideStyles.brandIcon}>
            <Film size={18} />
          </span>
          <span className={asideStyles.brandText}>Watchlist</span>
        </div>

        <nav className={asideStyles.nav}>
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${asideStyles.link} ${isActive ? asideStyles.linkActive : ''}`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      <p className={asideStyles.footer}>Your personal movie tracker</p>
    </aside>
  );
}

export default Aside;
