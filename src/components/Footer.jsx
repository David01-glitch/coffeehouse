import { Link } from 'react-router-dom';
import { Coffee, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { site } from '../data/site';
import { categories } from '../data/categories';

export default function Footer() {
  return (
    <footer className="relative bg-espresso-grad text-cream-100 mt-24 overflow-hidden">
      <div className="absolute -top-32 -right-24 w-[420px] h-[420px] bg-caramel-500/15 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] bg-mocha-500/15 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-full bg-cream-100/10 border border-cream-100/20 grid place-items-center">
                <Coffee size={18} className="text-caramel-300" />
              </span>
              <span className="font-display text-2xl text-cream-50">Coffee Club</span>
            </Link>
            <p className="mt-5 text-cream-200/80 leading-relaxed max-w-sm">
              {site.tagline} Brewed from a small studio in {site.city}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 grid place-items-center rounded-full bg-cream-100/5 border border-cream-100/10 hover:bg-cream-100/10 transition"
                >
                  <Icon size={16} className="text-cream-100" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-cream-50 text-lg mb-4">Explore</h4>
            <ul className="space-y-2.5 text-[15px] text-cream-200/85">
              <li><Link to="/" className="hover:text-caramel-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-caramel-300">About</Link></li>
              <li><Link to="/blog" className="hover:text-caramel-300">Blog</Link></li>
              <li><Link to="/community" className="hover:text-caramel-300">Community</Link></li>
              <li><Link to="/tutorials" className="hover:text-caramel-300">Tutorials</Link></li>
              <li><Link to="/contact" className="hover:text-caramel-300">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-cream-50 text-lg mb-4">Categories</h4>
            <ul className="space-y-2.5 text-[15px] text-cream-200/85">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/category/${c.slug}`} className="hover:text-caramel-300">
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-cream-50 text-lg mb-4">Visit</h4>
            <ul className="space-y-3 text-[14px] text-cream-200/85">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-caramel-300 shrink-0" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-caramel-300 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-caramel-300 break-all">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-caramel-300 shrink-0" />
                <a href={site.phoneHref} className="hover:text-caramel-300">{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream-100/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-cream-200/70">
          <p>© {new Date().getFullYear()} Coffee Club. Brewed slowly in Portland, Maine.</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li><Link to="/privacy" className="hover:text-caramel-300">Privacy</Link></li>
            <li><Link to="/terms" className="hover:text-caramel-300">Terms</Link></li>
            <li><Link to="/refund" className="hover:text-caramel-300">Refund</Link></li>
            <li><Link to="/about" className="hover:text-caramel-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-caramel-300">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
