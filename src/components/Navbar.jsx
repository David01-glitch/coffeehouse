import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';
import { Events } from '../utils/analytics';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/community', label: 'Community' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => Events.navClick('logo')}>
          <span className="w-9 h-9 rounded-full bg-espresso-grad grid place-items-center shadow-soft">
            <Coffee className="w-4.5 h-4.5 text-cream-100" size={18} />
          </span>
          <span className="font-display text-xl sm:text-[22px] tracking-tight text-espresso-900">
            Coffee <span className="text-mocha-700">Club</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => Events.navClick(l.label)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-[15px] font-medium transition-colors ${
                    isActive
                      ? 'bg-espresso-700 text-cream-50'
                      : 'text-espresso-800 hover:bg-cream-200/70'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/community"
          onClick={() => Events.ctaClick('navbar_join')}
          className="hidden lg:inline-flex items-center gap-2 bg-espresso-grad text-cream-50 px-5 py-2.5 rounded-full text-sm font-medium shadow-soft hover:shadow-cozy transition-shadow"
        >
          Join the Club
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 grid place-items-center rounded-full glass"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden overflow-hidden glass border-t border-cream-200"
          >
            <ul className="px-5 py-4 space-y-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => Events.navClick(l.label)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium ${
                        isActive ? 'bg-espresso-700 text-cream-50' : 'text-espresso-800 hover:bg-cream-200/70'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link
                  to="/community"
                  className="mt-2 block text-center bg-espresso-grad text-cream-50 px-5 py-3 rounded-xl text-sm font-medium"
                >
                  Join the Club
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
