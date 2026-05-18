import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Star, Quote, Sparkles, MapPin, Mail, Phone } from 'lucide-react';

import Section, { SectionHeading } from '../components/Section';
import ExpandableCategoryCard from '../components/ExpandableCategoryCard';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import { categories } from '../data/categories';
import { articles } from '../data/articles';
import { site } from '../data/site';
import { Events } from '../utils/analytics';

import heroImg from '../assets/images/hero/cozy-modern-cafe.jpg';
import morningImg from '../assets/images/hero/morning-light.jpg';
import baristaImg from '../assets/images/hero/barista-pour.jpg';
import scandiImg from '../assets/images/lifestyle/scandi-living.jpg';
import gardenImg from '../assets/images/lifestyle/garden-coffee.jpg';
import windowSeat from '../assets/images/cafes/window-seat.jpg';
import woodCounter from '../assets/images/cafes/wood-counter.jpg';
import leatherBooth from '../assets/images/cafes/leather-booth.jpg';
import groupTable from '../assets/images/community/group-table.jpg';
import bookClub from '../assets/images/community/book-club.jpg';
import journaling from '../assets/images/morning/journaling.jpg';
import sunrise from '../assets/images/morning/sunrise.jpg';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-warm-grad" />
        <div className="absolute -top-32 -right-20 w-[560px] h-[560px] bg-caramel-300/30 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -left-20 w-[520px] h-[520px] bg-mocha-500/15 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-cream-200 text-[12.5px] tracking-[0.2em] uppercase text-mocha-700 font-medium">
                <Sparkles size={13} className="text-caramel-500" />
                A Modern Coffee Lifestyle Club
              </span>
              <h1 className="mt-6 font-display text-[44px] sm:text-6xl lg:text-[78px] leading-[0.98] text-espresso-900 tracking-tight">
                Slow mornings.<br />
                <span className="text-mocha-700 italic">Warmer</span> conversations.
              </h1>
              <p className="mt-7 text-[18px] text-espresso-700/85 max-w-xl leading-relaxed">
                Coffee Club is a quiet rebellion against the rush — café reviews, slow brewing rituals,
                and a modern social life built around one good cup at a time.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/blog"
                  onClick={() => Events.ctaClick('hero_read_blog')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-espresso-grad text-cream-50 text-[15px] font-medium shadow-soft hover:shadow-cozy transition-shadow"
                >
                  Read the latest <ArrowRight size={16} />
                </Link>
                <Link
                  to="/community"
                  onClick={() => Events.ctaClick('hero_join_community')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass border border-cream-200 text-espresso-800 text-[15px] font-medium hover:bg-cream-100"
                >
                  Join the community
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[windowSeat, woodCounter, leatherBooth].map((img, i) => (
                    <img key={i} src={img} alt="" className="w-10 h-10 rounded-full border-2 border-cream-50 object-cover" />
                  ))}
                </div>
                <div className="text-[13.5px] text-espresso-700/80">
                  <div className="flex items-center gap-1 text-caramel-500">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                  </div>
                  <p>Trusted by <strong className="text-espresso-900">8,200+</strong> readers across 30+ cities</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-6 relative"
            >
              <div className="relative grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 aspect-square">
                <div className="col-span-4 row-span-4 rounded-[28px] overflow-hidden shadow-cozy">
                  <img src={heroImg} alt="Modern cozy café interior" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 row-span-3 rounded-[22px] overflow-hidden shadow-soft">
                  <img src={baristaImg} alt="Barista pouring coffee" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-2 row-span-3 rounded-[22px] overflow-hidden shadow-soft">
                  <img src={morningImg} alt="Morning light through a window" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-3 row-span-2 rounded-[22px] overflow-hidden shadow-soft">
                  <img src={sunrise} alt="Sunrise" className="w-full h-full object-cover" />
                </div>
                <div className="col-span-3 row-span-2 rounded-[22px] overflow-hidden shadow-soft">
                  <img src={journaling} alt="Morning journaling" className="w-full h-full object-cover" />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-5 glass px-4 py-3 rounded-2xl shadow-cozy hidden sm:flex items-center gap-3"
              >
                <Coffee className="text-mocha-700" size={18} />
                <div className="text-[12.5px]">
                  <p className="font-medium text-espresso-900">Today's brew</p>
                  <p className="text-espresso-700/80">Ethiopia Yirgacheffe — pour-over</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <Section className="mt-10">
        <SectionHeading
          eyebrow="Featured"
          title="Coffee, mornings, conversation — the things we write about most."
          lead="Six warm threads we keep returning to. Click Explore on any card to peek inside without leaving this page."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <ExpandableCategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </Section>

      {/* Café showcase */}
      <Section className="mt-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Cozy Café Showcase"
              title="Rooms worth lingering in."
              lead="A small, growing atlas of the cafés we keep coming back to — for the wood, the welcome, and the way the cup arrives."
            />
            <Link
              to="/category/cafe-reviews"
              onClick={() => Events.ctaClick('home_explore_cafes')}
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
            >
              Explore the atlas <ArrowRight size={15} />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-6 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-4 rounded-3xl overflow-hidden aspect-[5/4] shadow-cozy"
            >
              <img src={windowSeat} alt="Window seat at a café" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-2 rounded-3xl overflow-hidden aspect-square shadow-soft"
            >
              <img src={woodCounter} alt="Wood counter" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-2 rounded-3xl overflow-hidden aspect-square shadow-soft"
            >
              <img src={leatherBooth} alt="Leather booth" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-4 rounded-3xl overflow-hidden aspect-[5/3] shadow-cozy"
            >
              <img src={scandiImg} alt="Scandinavian living room" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Morning routine */}
      <Section className="mt-28">
        <div className="relative rounded-[36px] bg-espresso-grad text-cream-50 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-caramel-500/20 blur-3xl rounded-full" />
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16">
              <span className="text-[12.5px] tracking-[0.2em] uppercase text-caramel-300 font-medium">
                The First Hour
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
                A slow morning is the most reliable luxury you can build.
              </h2>
              <p className="mt-5 text-cream-200/85 max-w-md">
                Our most-read essays, the rituals our readers swear by, and the small adjustments
                that change how the rest of the day feels.
              </p>
              <ul className="mt-7 space-y-3 text-[15.5px]">
                {[
                  'Water before coffee. Always.',
                  'One method, brewed the same way for two weeks.',
                  'No screens for the first thirty minutes.',
                  'A single warm lamp instead of overhead light.',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-caramel-400" />
                    <span className="text-cream-200/90">{t}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/category/morning-routines"
                onClick={() => Events.ctaClick('home_morning_routine')}
                className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-caramel-500 text-espresso-900 text-sm font-medium hover:bg-caramel-400"
              >
                Read the morning guide <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
              <img src={morningImg} alt="Morning light in a café" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/60 via-transparent to-transparent lg:from-espresso-900/80" />
            </div>
          </div>
        </div>
      </Section>

      {/* Community conversations */}
      <Section className="mt-28">
        <SectionHeading
          eyebrow="Community Conversations"
          title="Quiet rooms, real conversation."
          lead="Once a month we host small in-person and online gatherings — book clubs, walking groups, and slow Saturday coffees. No agenda. Always warm."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { img: groupTable, title: 'Saturday Slow Coffees', meta: 'Portland · 12 spots', body: 'A table for twelve, a pot of single-origin filter, and three questions worth answering.' },
            { img: bookClub, title: 'Coffee Club Book Club', meta: 'Online · Monthly', body: 'One book a month, picked together. Short essays, slow novels, occasional poetry.' },
            { img: gardenImg, title: 'Morning Walking Groups', meta: 'Multiple cities', body: 'A two-mile loop, a stop for coffee at the end, and a standing 8am date with friends.' },
          ].map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl overflow-hidden bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={it.img} alt={it.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-[12.5px] uppercase tracking-[0.18em] text-mocha-600">{it.meta}</p>
                <h3 className="mt-2 font-display text-xl text-espresso-900">{it.title}</h3>
                <p className="mt-2 text-[14.5px] text-espresso-700/85 leading-relaxed">{it.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Retirement social */}
      <Section className="mt-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative rounded-[32px] overflow-hidden shadow-cozy aspect-[5/4]"
          >
            <img src={gardenImg} alt="Garden coffee with friends" className="w-full h-full object-cover" />
          </motion.div>
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Retirement, Reimagined"
              title="The most social chapter of your life — if you design it."
              lead="Our retired readers don't have empty weeks. They have the warmest, most considered weeks of anyone we know. A standing café morning is usually the load-bearing wall."
            />
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {[
                { t: 'A standing weekly café', d: 'Same friends, same café, same hour. The simplest social system that works.' },
                { t: 'A monthly “new place”', d: 'Lunch somewhere none of you have been. Even twenty minutes away counts.' },
                { t: 'One hobby with a class', d: 'Something that requires you to show up on a Wednesday at 6pm.' },
                { t: 'A long Sunday call', d: 'A standing phone call with someone far away. Put it on the calendar.' },
              ].map((it, i) => (
                <div key={i} className="rounded-2xl bg-cream-100 border border-cream-200 p-5">
                  <h4 className="font-display text-lg text-espresso-900">{it.t}</h4>
                  <p className="mt-1.5 text-[14.5px] text-espresso-700/85">{it.d}</p>
                </div>
              ))}
            </div>
            <Link
              to="/category/retirement-social-life"
              onClick={() => Events.ctaClick('home_retirement')}
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
            >
              Explore retirement living <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="mt-28">
        <SectionHeading
          eyebrow="From our readers"
          title="What the Sunday Brew has done for our community."
          align="center"
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { n: 'Marianne, 64', city: 'Boston, MA', q: 'I started a Tuesday café morning the week after I read your retirement essay. Three years later, my Tuesdays are the best thing I own.' },
            { n: 'Daniel, 41', city: 'Portland, OR', q: 'Your pour-over guide replaced my drip machine. The whole morning got slower in the best way.' },
            { n: 'Eleanor, 71', city: 'Asheville, NC', q: 'I look forward to the Sunday letter the way I used to look forward to the paper. Warm, honest, never preachy.' },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="rounded-3xl bg-cream-50 border border-cream-200 shadow-soft p-7 relative"
            >
              <Quote className="text-caramel-500/60 absolute top-5 right-5" size={26} />
              <p className="text-[16px] text-espresso-800 leading-relaxed">&ldquo;{t.q}&rdquo;</p>
              <div className="mt-6 pt-5 border-t border-cream-200">
                <p className="font-display text-espresso-900">{t.n}</p>
                <p className="text-[13px] text-mocha-600">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <div className="mt-28">
        <Newsletter />
      </div>

      {/* FAQ */}
      <div className="mt-28">
        <FAQ
          eyebrow="Questions"
          title="A few things readers often ask."
          lead="If your question isn't here, the contact page has a form — and the inbox is small enough that we usually reply the same week."
        />
      </div>

      {/* Contact preview */}
      <Section className="mt-28">
        <div className="relative rounded-[32px] bg-cream-50 border border-cream-200 shadow-soft p-8 sm:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading
              eyebrow="Say hello"
              title="We read every message — usually with a coffee in hand."
              lead="Have a café you love? A reader question? Want to host a meet-up? Our inbox is small and warm."
            />
            <Link
              to="/contact"
              onClick={() => Events.ctaClick('home_contact')}
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-espresso-grad text-cream-50 text-sm font-medium shadow-soft"
            >
              Open the contact page <ArrowRight size={15} />
            </Link>
          </div>
          <ul className="space-y-3 text-[15px]">
            <li className="flex items-start gap-3 p-4 rounded-2xl bg-cream-100 border border-cream-200">
              <MapPin className="mt-1 text-mocha-700" size={18} />
              <span className="text-espresso-800">{site.address}</span>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-2xl bg-cream-100 border border-cream-200">
              <Mail className="mt-1 text-mocha-700" size={18} />
              <a href={`mailto:${site.email}`} className="text-espresso-800 hover:text-mocha-700 break-all">{site.email}</a>
            </li>
            <li className="flex items-start gap-3 p-4 rounded-2xl bg-cream-100 border border-cream-200">
              <Phone className="mt-1 text-mocha-700" size={18} />
              <a href={site.phoneHref} className="text-espresso-800 hover:text-mocha-700">{site.phone}</a>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
