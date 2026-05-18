import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, ArrowRight, Coffee, Sun, Users, Sparkles } from 'lucide-react';
import { Events } from '../utils/analytics';

export default function ExpandableCategoryCard({ category, index = 0 }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((o) => {
      if (!o) Events.hobbyExpand(category.title);
      return !o;
    });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
      className="group relative rounded-[28px] overflow-hidden bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
    >
      <motion.div layout className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/70 via-espresso-900/10 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5 text-cream-50">
          <h3 className="font-display text-2xl sm:text-[28px] leading-tight">{category.title}</h3>
          <p className="mt-2 text-[14.5px] text-cream-100/90 line-clamp-2">{category.blurb}</p>
        </div>
      </motion.div>

      <motion.div layout className="p-5 sm:p-6 flex items-center justify-between gap-3">
        <button
          onClick={toggle}
          aria-expanded={open}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
        >
          {open ? <>Show Less <ChevronUp size={16} /></> : <>Explore <ChevronDown size={16} /></>}
        </button>
        <Link
          to={`/category/${category.slug}`}
          className="text-sm font-medium text-espresso-800 hover:text-mocha-700 inline-flex items-center gap-1"
        >
          Full page <ArrowRight size={14} />
        </Link>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-7 pb-7 space-y-6">
              <p className="text-espresso-700/90 leading-relaxed text-[15.5px]">{category.intro}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <InfoBlock icon={Coffee} title="Coffee recommendations" items={category.recommendations} />
                <InfoBlock icon={Sun} title="Morning routine ideas" items={category.morning} />
                <InfoBlock icon={Users} title="Social lifestyle tips" items={category.lifestyle} />
                <InfoBlock icon={Sparkles} title="Beginner guidance" text={category.beginner} />
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to={`/category/${category.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
                >
                  View Full Page <ArrowRight size={14} />
                </Link>
                <button
                  onClick={toggle}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-espresso-700/20 text-espresso-800 text-sm font-medium hover:bg-cream-200/80"
                >
                  Show Less <ChevronUp size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function InfoBlock({ icon: Icon, title, items, text }) {
  return (
    <div className="rounded-2xl bg-cream-100 border border-cream-200 p-4 sm:p-5">
      <div className="flex items-center gap-2 text-mocha-700">
        <Icon size={16} />
        <h4 className="font-display text-base text-espresso-900">{title}</h4>
      </div>
      {items ? (
        <ul className="mt-3 space-y-1.5 text-[14.5px] text-espresso-700/90">
          {items.map((it, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-caramel-500">•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-[14.5px] text-espresso-700/90 leading-relaxed">{text}</p>
      )}
    </div>
  );
}
