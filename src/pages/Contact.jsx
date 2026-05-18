import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Check } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section, { SectionHeading } from '../components/Section';
import FAQ from '../components/FAQ';
import { site } from '../data/site';
import { Events } from '../utils/analytics';
import heroImg from '../assets/images/cafes/leather-booth.svg';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes('@') || !form.message) return;
    Events.contactSubmit();
    setSent(true);
    setForm({ name: '', email: '', subject: 'General', message: '' });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello — with a coffee in hand."
        lead="A reader question, a café recommendation, a meet-up to host. The inbox is small and warm, and we usually reply within a few days."
        image={heroImg}
      />

      <Section>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              { icon: MapPin, t: 'Visit us', v: site.address, sub: 'Mornings only, by appointment.' },
              { icon: Mail, t: 'Email', v: site.email, sub: 'We read every message ourselves.', href: `mailto:${site.email}` },
              { icon: Phone, t: 'Call', v: site.phone, sub: 'Mon–Fri, 9am–4pm ET', href: site.phoneHref },
              { icon: Clock, t: 'Reply time', v: 'Usually 1–3 business days', sub: 'Slower on long weekends — we are human.' },
            ].map((it, i) => (
              <div key={i} className="rounded-2xl bg-cream-50 border border-cream-200 shadow-soft p-5 flex gap-4">
                <span className="w-11 h-11 rounded-2xl bg-espresso-grad text-cream-50 grid place-items-center shrink-0">
                  <it.icon size={17} />
                </span>
                <div>
                  <p className="font-display text-lg text-espresso-900">{it.t}</p>
                  {it.href ? (
                    <a href={it.href} className="text-espresso-800 hover:text-mocha-700 break-words">{it.v}</a>
                  ) : (
                    <p className="text-espresso-800 break-words">{it.v}</p>
                  )}
                  <p className="text-[13px] text-mocha-600 mt-1">{it.sub}</p>
                </div>
              </div>
            ))}
          </motion.aside>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-[28px] bg-cream-50 border border-cream-200 shadow-soft p-7 sm:p-10"
          >
            <SectionHeading eyebrow="Write to us" title="What is on your mind?" />
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" value={form.name} onChange={handle} required />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handle} required />
            </div>
            <div className="mt-4">
              <label className="block text-[13.5px] font-medium text-espresso-800 mb-1.5">Subject</label>
              <select
                name="subject"
                value={form.subject}
                onChange={handle}
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-800 outline-none focus:border-mocha-700"
              >
                <option>General</option>
                <option>Café recommendation</option>
                <option>Host a chapter</option>
                <option>Press & partnerships</option>
                <option>Newsletter feedback</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-[13.5px] font-medium text-espresso-800 mb-1.5">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handle}
                rows={6}
                required
                placeholder="Tell us a little about what you have in mind."
                className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-800 outline-none focus:border-mocha-700 resize-y"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-espresso-grad text-cream-50 text-[15px] font-medium shadow-soft"
            >
              {sent ? <><Check size={16} /> Message sent</> : <>Send message <Send size={15} /></>}
            </button>

            {sent && (
              <p className="mt-4 text-[14px] text-mocha-700">
                Thank you — your message has been received. We will reply within a few days.
              </p>
            )}
          </motion.form>
        </div>
      </Section>

      <div className="mt-24">
        <FAQ
          eyebrow="Helpful answers"
          title="A few questions answered before you ask."
        />
      </div>
    </>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-[13.5px] font-medium text-espresso-800 mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-cream-300 text-espresso-800 outline-none focus:border-mocha-700"
      />
    </div>
  );
}
