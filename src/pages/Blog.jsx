import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section from '../components/Section';
import ArticleAccordion from '../components/ArticleAccordion';
import Newsletter from '../components/Newsletter';
import { articles, articleCategories } from '../data/articles';
import heroImg from '../assets/images/blog/pourover-guide.svg';

const PAGE_STEP = 4;

export default function Blog() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');
  const [visible, setVisible] = useState(PAGE_STEP);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCat = cat === 'All' || a.category === cat;
      const matchesQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, cat]);

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Slow essays on coffee, mornings, and the warmer life."
        lead="A weekly journal — café reviews, brew rituals, and ideas for slower, more social weeks. Every article expands right here on the page."
        image={heroImg}
      />

      <Section className="mt-2">
        <div className="rounded-2xl bg-cream-50 border border-cream-200 shadow-soft p-4 sm:p-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 flex-1 px-3 py-1 rounded-xl bg-cream-100 border border-cream-200">
            <Search size={18} className="text-mocha-700" />
            <input
              type="text"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisible(PAGE_STEP); }}
              placeholder="Search essays, cafés, ideas…"
              className="flex-1 bg-transparent py-2.5 outline-none text-espresso-800 placeholder:text-mocha-600/70"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {articleCategories.map((c) => (
              <button
                key={c}
                onClick={() => { setCat(c); setVisible(PAGE_STEP); }}
                className={`px-3.5 py-2 rounded-full text-[13px] font-medium border transition ${
                  cat === c
                    ? 'bg-espresso-700 border-espresso-700 text-cream-50'
                    : 'border-cream-300 text-espresso-800 hover:bg-cream-100'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section className="mt-10">
        <div className="space-y-6">
          {filtered.slice(0, visible).map((a, i) => (
            <ArticleAccordion key={a.id} article={a} index={i} />
          ))}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 rounded-3xl bg-cream-50 border border-cream-200"
            >
              <p className="font-display text-2xl text-espresso-900">No essays match that yet.</p>
              <p className="mt-2 text-espresso-700/80">Try a different search or pick another category.</p>
            </motion.div>
          )}
        </div>

        {visible < filtered.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_STEP)}
              className="px-6 py-3 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
            >
              Load more essays
            </button>
          </div>
        )}
      </Section>

      <div className="mt-24">
        <Newsletter />
      </div>
    </>
  );
}
