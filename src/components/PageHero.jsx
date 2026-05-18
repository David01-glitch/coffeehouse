import { motion } from 'framer-motion';

export default function PageHero({ eyebrow, title, lead, image, align = 'left' }) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-warm-grad" />
      <div className="absolute -top-20 -right-20 w-[480px] h-[480px] bg-caramel-300/30 blur-3xl rounded-full" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] bg-mocha-500/15 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${align === 'center' ? 'lg:grid-cols-1 text-center' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.2em] uppercase text-mocha-600 font-medium">
                <span className="w-6 h-px bg-mocha-600/60" />
                {eyebrow}
              </span>
            )}
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-[64px] leading-[1.02] text-espresso-900">
              {title}
            </h1>
            {lead && (
              <p className="mt-6 text-[17.5px] text-espresso-700/90 leading-relaxed max-w-xl">
                {lead}
              </p>
            )}
          </motion.div>

          {image && align !== 'center' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative aspect-[5/4] rounded-[32px] overflow-hidden shadow-cozy"
            >
              <img src={image} alt={title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-cream-50/30 rounded-[32px]" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
