import { motion } from 'framer-motion';

export function SectionEyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.2em] uppercase text-mocha-600 font-medium">
      <span className="w-6 h-px bg-mocha-600/60" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, lead, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05] text-espresso-900">
        {title}
      </h2>
      {lead && <p className="mt-5 text-[17px] text-espresso-700/85 leading-relaxed">{lead}</p>}
    </motion.div>
  );
}

export default function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </section>
  );
}
