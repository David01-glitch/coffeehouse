import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { grantConsent, denyConsent, Events } from '../utils/analytics';

const KEY = 'cc_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    if (stored === 'granted') grantConsent();
    else denyConsent();
  }, []);

  const decide = (decision) => {
    localStorage.setItem(KEY, decision);
    if (decision === 'granted') grantConsent();
    else denyConsent();
    Events.cookieConsent(decision);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:pb-6"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="mx-auto max-w-3xl glass shadow-cozy rounded-2xl border border-cream-200 px-5 py-5 sm:px-7 sm:py-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <div className="shrink-0 w-11 h-11 rounded-full bg-espresso-grad grid place-items-center">
              <Cookie size={20} className="text-caramel-300" />
            </div>
            <div className="flex-1 text-[14.5px] text-espresso-800">
              <p className="font-medium text-espresso-900">A small note about cookies</p>
              <p className="mt-1 text-espresso-700/85">
                We use cookies for analytics and to improve your experience. You can accept all, or
                decline non-essential cookies. Either way, our site still works beautifully.
              </p>
            </div>
            <div className="flex gap-2 self-stretch sm:self-auto">
              <button
                onClick={() => decide('denied')}
                className="px-4 py-2.5 rounded-full text-sm font-medium border border-espresso-700/20 text-espresso-800 hover:bg-cream-200/80"
              >
                Decline
              </button>
              <button
                onClick={() => decide('granted')}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-espresso-grad text-cream-50 shadow-soft"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
