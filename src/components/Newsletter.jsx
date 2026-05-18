import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { Events } from '../utils/analytics';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    Events.newsletterSignup();
    setDone(true);
    setEmail('');
  };

  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[32px] bg-espresso-grad text-cream-50 p-8 sm:p-12 lg:p-16 shadow-cozy"
      >
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-caramel-500/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-mocha-700/30 blur-3xl rounded-full" />

        <div className="relative grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[12.5px] tracking-[0.2em] uppercase text-caramel-300 font-medium">
              <span className="w-6 h-px bg-caramel-300/60" /> The Sunday Brew
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.05]">
              One thoughtful letter, every Sunday morning.
            </h2>
            <p className="mt-4 text-cream-200/85 max-w-md">
              Café reviews, a single brew recipe, and a question worth asking over coffee this week.
              No noise. Unsubscribe anytime.
            </p>
          </div>

          <form onSubmit={submit} className="w-full">
            <div className="glass-dark rounded-2xl p-2 flex flex-col sm:flex-row gap-2 sm:items-center">
              <div className="flex items-center gap-2 px-3 flex-1">
                <Mail size={18} className="text-caramel-300" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@coffee.club"
                  className="bg-transparent flex-1 py-3 outline-none text-cream-50 placeholder:text-cream-200/50"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-caramel-500 text-espresso-900 font-medium hover:bg-caramel-400 transition"
              >
                {done ? <span className="inline-flex items-center gap-2"><Check size={16}/> Subscribed</span> : 'Subscribe'}
              </button>
            </div>
            <p className="mt-3 text-[12.5px] text-cream-200/60">
              By subscribing you agree to our privacy policy. We never share your email.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
