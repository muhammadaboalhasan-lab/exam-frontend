import { useState } from 'react';
import { NavLink } from 'react-router';
import { Film, LayoutGrid, Plus, Search, Menu, X } from 'lucide-react';
import { asideStyles as s } from './asideStyle';

const links = [
  { to: '/allMovies', label: 'All Movies', icon: LayoutGrid },
  { to: '/addNewMovie', label: 'Add New Movie', icon: Plus },
  { to: '/searchMovie', label: 'Search Movie', icon: Search },
];

function Aside() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={s.aside}>
      <div className={s.top}>
        <div className={s.brand}>
          <span className={s.brandIcon}>
            <Film size={18} />
          </span>
          <span className={s.brandText}>Watchlist</span>
        </div>
        <button
          type="button"
          className={s.toggle}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className={`${s.nav} ${open ? s.navOpen : s.navClosed}`}>
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `${s.link} ${isActive ? s.linkActive : ''}`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>

      <p className={s.footer}>Your personal movie tracker</p>
    </aside>
  );
}

export default Aside;
