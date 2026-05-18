import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from './Section';

const defaultFaqs = [
  {
    q: 'What exactly is Coffee Club?',
    a: 'Coffee Club is a modern coffee lifestyle publication and small community based in Portland, Maine. We share café reviews, slow morning routines, and ideas for warmer, more social weeks.',
  },
  {
    q: 'Is membership required to read?',
    a: 'No. Almost everything we publish is free to read. Members get a weekly Sunday letter, occasional in-person events, and member-only café guides.',
  },
  {
    q: 'Do you only feature cafés in Portland?',
    a: 'Portland is home, but we travel often. Expect features from Boston, Brooklyn, Montreal, Asheville, and small towns in between.',
  },
  {
    q: 'Is the club only for retirees?',
    a: 'Not at all. We have a strong community of readers who are retired or close to it, but the club welcomes anyone who values slow mornings and good conversation.',
  },
  {
    q: 'How do I host a Coffee Club meet-up locally?',
    a: 'Email us at seniorcoffeeclub@gmail.com. We share a short host kit, a few prompts, and a list of cafés in your area that work well for small groups.',
  },
  {
    q: 'Where do you stand on espresso vs. filter?',
    a: 'We refuse to take a side. Both are wonderful when treated with care. Most weeks our team drinks one of each.',
  },
];

export default function FAQ({ faqs = defaultFaqs, eyebrow = 'Questions', title = 'Things readers often ask', lead }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <SectionHeading eyebrow={eyebrow} title={title} lead={lead} align="center" />
      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              layout
              key={i}
              className="rounded-2xl bg-cream-50 border border-cream-200 overflow-hidden shadow-soft"
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg text-espresso-900">{f.q}</span>
                <span className={`w-9 h-9 grid place-items-center rounded-full border border-cream-300 transition ${isOpen ? 'bg-espresso-700 text-cream-50 border-espresso-700' : 'text-espresso-800'}`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 sm:px-6 pb-6 -mt-1 text-[15.5px] text-espresso-700/90 leading-relaxed">
                      {f.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
