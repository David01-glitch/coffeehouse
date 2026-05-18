import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Coffee, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section, { SectionHeading } from '../components/Section';
import Newsletter from '../components/Newsletter';
import FAQ from '../components/FAQ';
import groupTable from '../assets/images/community/group-table.jpg';
import bookClub from '../assets/images/community/book-club.jpg';
import walking from '../assets/images/community/walking-group.jpg';
import portland from '../assets/images/projects/portland-pop-up.jpg';
import meetup from '../assets/images/projects/morning-meetups.jpg';

const chapters = [
  { city: 'Portland, ME', members: 320, hosts: 6 },
  { city: 'Boston, MA', members: 240, hosts: 4 },
  { city: 'Brooklyn, NY', members: 410, hosts: 7 },
  { city: 'Burlington, VT', members: 110, hosts: 2 },
  { city: 'Asheville, NC', members: 180, hosts: 3 },
  { city: 'Montreal, QC', members: 145, hosts: 3 },
  { city: 'Toronto, ON', members: 210, hosts: 4 },
  { city: 'Portland, OR', members: 260, hosts: 5 },
  { city: 'Seattle, WA', members: 230, hosts: 4 },
  { city: 'Austin, TX', members: 180, hosts: 3 },
  { city: 'Chicago, IL', members: 290, hosts: 5 },
  { city: 'San Francisco, CA', members: 320, hosts: 6 },
];

const formats = [
  { icon: Coffee, t: 'Slow Saturday Coffees', d: 'A small standing table at a local café. Twelve people, two questions, ninety minutes.', img: groupTable },
  { icon: Calendar, t: 'Coffee Club Book Club', d: 'One book a month, picked together. Online and in-person chapters in twelve cities.', img: bookClub },
  { icon: Users, t: 'Morning Walking Groups', d: 'A two-mile loop, a coffee at the end, and a standing 8am date with friends.', img: walking },
];

export default function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Small rooms, real conversations, twelve cities."
        lead="Coffee Club is — first and last — a community. Twelve city chapters, three formats, and a shared belief that the warmest rooms are the small ones."
        image={portland}
      />

      <Section className="mt-2">
        <SectionHeading
          eyebrow="What we host"
          title="Three quiet formats. All free to attend."
          lead="None of our meet-ups are bigger than they need to be. We keep tables small on purpose — that is where the real conversation lives."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {formats.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl overflow-hidden bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={f.img} alt={f.t} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-2 w-10 h-10 rounded-2xl bg-espresso-grad text-cream-50">
                  <f.icon size={16} className="m-auto" />
                </span>
                <h3 className="mt-4 font-display text-xl text-espresso-900">{f.t}</h3>
                <p className="mt-2 text-[14.5px] text-espresso-700/85 leading-relaxed">{f.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <SectionHeading
          eyebrow="Where we meet"
          title="Twelve cities. Quietly growing every season."
          lead="Each chapter is led by a small group of local hosts. We are not trying to be everywhere — we are trying to be warm everywhere we are."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((c, i) => (
            <motion.div
              key={c.city}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-2xl p-5 bg-cream-50 border border-cream-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-espresso-grad grid place-items-center text-cream-50">
                  <MapPin size={15} />
                </span>
                <div>
                  <p className="font-display text-espresso-900">{c.city}</p>
                  <p className="text-[12.5px] text-mocha-600">{c.hosts} hosts</p>
                </div>
              </div>
              <p className="text-[14px] font-medium text-espresso-800">{c.members} members</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <div className="relative rounded-[32px] overflow-hidden bg-espresso-grad text-cream-50 p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-caramel-500/20 blur-3xl rounded-full" />
          <div className="relative">
            <span className="text-[12.5px] tracking-[0.2em] uppercase text-caramel-300 font-medium">Host a chapter</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Start a Coffee Club in your city.
            </h2>
            <p className="mt-5 text-cream-200/85 max-w-md">
              We send a short host kit, a small set of conversation prompts, and a list of cafés in
              your city that work well for ten to fifteen people. The rest is up to you.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-caramel-500 text-espresso-900 text-sm font-medium hover:bg-caramel-400"
            >
              Email us to host <ArrowRight size={15} />
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[5/4] shadow-cozy">
            <img src={meetup} alt="A small morning meet-up" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <div className="mt-24">
        <Newsletter />
      </div>

      <div className="mt-24">
        <FAQ
          eyebrow="Hosting & meet-ups"
          title="Questions about joining or hosting."
          faqs={[
            { q: 'Is it free to attend?', a: 'Yes. Every meet-up is free. You buy your own coffee — that is the whole financial model.' },
            { q: 'How many people attend a typical Saturday coffee?', a: 'Most chapters cap a single table at twelve. Larger meet-ups split into two tables.' },
            { q: 'Do I need to know anyone?', a: 'No. Most attendees come alone the first time. Hosts make introductions in the first ten minutes.' },
            { q: 'What if my city is not on the list yet?', a: 'Email us — we will help you start one. Most chapters begin with three to five people.' },
            { q: 'Are kids and family welcome?', a: 'Walking groups, yes. Sit-down coffees are 18+ to keep the table conversational.' },
            { q: 'How do I find out about events?', a: 'The Sunday Brew newsletter announces every meet-up about ten days in advance.' },
          ]}
        />
      </div>
    </>
  );
}
