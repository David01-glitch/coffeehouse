import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-[88vh] grid place-items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-warm-grad" />
      <div className="absolute -top-32 -right-32 w-[560px] h-[560px] bg-caramel-300/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[460px] h-[460px] bg-mocha-500/20 blur-3xl rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative max-w-2xl mx-auto px-6 text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-espresso-grad shadow-cozy"
        >
          <Coffee className="text-caramel-300" size={32} />
        </motion.div>
        <p className="mt-8 font-display text-[120px] sm:text-[180px] leading-none text-espresso-900/90 tracking-tight">404</p>
        <h1 className="mt-2 font-display text-3xl sm:text-4xl text-espresso-900">
          That cup of coffee has gone cold.
        </h1>
        <p className="mt-4 text-espresso-700/85 max-w-md mx-auto">
          The page you are looking for is not here — or it slipped away with the last barista.
          Let us pour you a fresh one.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
          >
            <Home size={15} /> Back home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass border border-cream-200 text-espresso-800 text-sm font-medium hover:bg-cream-100"
          >
            <ArrowLeft size={15} /> Read the journal
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
