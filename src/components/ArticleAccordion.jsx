import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, Share2, ChevronDown, ChevronUp } from 'lucide-react';
import { Events } from '../utils/analytics';

export default function ArticleAccordion({ article, index = 0 }) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((o) => {
      if (!o) Events.articleExpand(article.title);
      return !o;
    });
  };

  const share = async (e) => {
    e.stopPropagation();
    Events.articleShare(article.title);
    const url = window.location.origin + '/blog#' + article.id;
    try {
      if (navigator.share) {
        await navigator.share({ title: article.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard');
      }
    } catch {}
  };

  return (
    <motion.article
      id={article.id}
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
      className="rounded-[24px] overflow-hidden bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
    >
      <motion.div layout className="grid md:grid-cols-[260px_1fr]">
        <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
          <img src={article.image} alt={article.title} loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-espresso-900/40 via-transparent to-transparent" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cream-50/90 text-[11.5px] font-medium text-espresso-800">
            {article.category}
          </span>
        </div>
        <div className="p-5 sm:p-7 flex flex-col">
          <div className="flex items-center gap-4 text-[12.5px] text-mocha-600">
            <span className="inline-flex items-center gap-1"><Calendar size={13} /> {article.date}</span>
            <span className="inline-flex items-center gap-1"><Clock size={13} /> {article.readTime}</span>
          </div>
          <h3 className="mt-2 font-display text-[22px] sm:text-[26px] leading-snug text-espresso-900">
            {article.title}
          </h3>
          <p className="mt-3 text-[15.5px] text-espresso-700/90 leading-relaxed">{article.excerpt}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={toggle}
              aria-expanded={open}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
            >
              {open ? <>Show less <ChevronUp size={15} /></> : <>Read more <ChevronDown size={15} /></>}
            </button>
            <button
              onClick={share}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-espresso-700/15 text-espresso-800 text-sm font-medium hover:bg-cream-200/80"
            >
              <Share2 size={14} /> Share
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-8 pb-8 md:pl-[296px]">
              <div className="prose-style text-[16px] leading-[1.8] text-espresso-800 space-y-4">
                {article.body.split('\n\n').map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                ))}
              </div>
              <div className="mt-7 pt-5 border-t border-cream-200 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[13.5px] text-mocha-600">Filed under <span className="text-espresso-800">{article.category}</span></p>
                <button onClick={toggle} className="inline-flex items-center gap-2 text-sm font-medium text-espresso-800">
                  Show less <ChevronUp size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
