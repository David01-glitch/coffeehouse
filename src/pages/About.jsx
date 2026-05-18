import PageHero from '../components/PageHero';
import Section, { SectionHeading } from '../components/Section';
import Newsletter from '../components/Newsletter';
import { motion } from 'framer-motion';
import { Coffee, Heart, Users, Leaf, Award, Map } from 'lucide-react';
import heroImg from '../assets/images/cafes/window-seat.svg';
import founder from '../assets/images/hero/barista-pour.svg';
import scene from '../assets/images/lifestyle/scandi-living.svg';

const values = [
  { icon: Coffee, t: 'Craft, gently', d: 'We celebrate good coffee without the snobbery. Tasting notes welcome — gatekeeping is not.' },
  { icon: Heart, t: 'Warmth first', d: 'Every essay, every café review, every meet-up is built around a single quiet question: does this make life warmer?' },
  { icon: Users, t: 'Small community', d: 'We grow slowly on purpose. A few thousand readers we recognize is worth more than a million we do not.' },
  { icon: Leaf, t: 'Slow and durable', d: 'We publish weekly, not daily. We host small, not big. We make things that age well.' },
];

const milestones = [
  { year: '2019', t: 'A Saturday coffee at Tandem', d: 'Coffee Club began as a standing Saturday meet-up of six friends at Tandem in Portland.' },
  { year: '2020', t: 'The first letter', d: 'A short weekly email we sent to twenty people. Most of them are still subscribers.' },
  { year: '2022', t: 'First Café Atlas', d: 'We published our first proper Portland Café Atlas. It is now in its fourth edition.' },
  { year: '2024', t: 'The Sunday Brew', d: 'Renamed the weekly letter. Began hosting walking groups across four cities.' },
  { year: '2026', t: 'The club, today', d: '8,000+ readers, 12 city chapters, and a slowly growing roster of meet-ups across the East Coast.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small club for slow mornings and good coffee."
        lead="Coffee Club is an independent publication and small community based in Portland, Maine. We write about coffee culture, café rooms worth visiting, slow mornings, and the kind of unhurried social life that holds a week together."
        image={heroImg}
      />

      {/* Story */}
      <Section className="mt-2">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-[32px] overflow-hidden shadow-cozy aspect-[4/5]"
          >
            <img src={founder} alt="Founder pouring coffee" className="w-full h-full object-cover" />
          </motion.div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Our story"
              title="It started, as most good things do, with a standing Saturday coffee."
              lead="In late 2019, six friends in Portland began meeting every Saturday at the same café. The conversations got better. The mornings got slower. The friendships got deeper. We started writing it down."
            />
            <div className="mt-7 space-y-5 text-[16.5px] text-espresso-800 leading-relaxed">
              <p>
                Coffee Club is now an independent publication read by thousands of people across
                North America and Europe — but its center of gravity is still that same kind of
                Saturday morning, in that same kind of café, with that same kind of company.
              </p>
              <p>
                We are not interested in optimization. We are interested in warmth, in attention, and
                in the small rituals that quietly make a life feel like yours. A good cup of coffee,
                slowly brewed and slowly drunk, is the most reliable one we know.
              </p>
              <p className="font-display text-mocha-700 italic">— The Coffee Club team, Portland, Maine</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="mt-28">
        <SectionHeading
          eyebrow="What we believe"
          title="Four quiet principles that shape everything we publish."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl p-7 bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
            >
              <span className="inline-flex w-11 h-11 rounded-2xl bg-espresso-grad text-cream-50 items-center justify-center">
                <v.icon size={18} />
              </span>
              <h3 className="mt-5 font-display text-xl text-espresso-900">{v.t}</h3>
              <p className="mt-2 text-[14.5px] text-espresso-700/90 leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section className="mt-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="A short history" title="From a kitchen table to a small international club." />
            <p className="mt-5 text-espresso-700/85 leading-relaxed">
              We have grown slowly on purpose. Every chapter has been small, considered, and built
              around real people meeting in real rooms.
            </p>
            <div className="mt-7 rounded-3xl overflow-hidden shadow-soft">
              <img src={scene} alt="A warm living room" className="w-full h-full object-cover" />
            </div>
          </div>
          <ol className="lg:col-span-7 relative space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-cream-300">
            {milestones.map((m, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-1 w-6 h-6 rounded-full bg-espresso-grad grid place-items-center text-[11px] font-medium text-cream-50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[12.5px] tracking-[0.2em] uppercase text-caramel-500 font-medium">{m.year}</p>
                <h4 className="mt-1 font-display text-xl text-espresso-900">{m.t}</h4>
                <p className="mt-1.5 text-[15px] text-espresso-700/90 leading-relaxed">{m.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Stats */}
      <Section className="mt-28">
        <div className="relative rounded-[32px] bg-espresso-grad text-cream-50 p-10 sm:p-14 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-caramel-500/20 blur-3xl rounded-full" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { k: '8,200+', l: 'Sunday Brew readers', icon: Users },
              { k: '12', l: 'City chapters', icon: Map },
              { k: '4', l: 'Editions of the Café Atlas', icon: Award },
              { k: '300+', l: 'Café reviews published', icon: Coffee },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <s.icon className="text-caramel-300" size={20} />
                <p className="mt-4 font-display text-4xl sm:text-5xl">{s.k}</p>
                <p className="mt-1 text-cream-200/80 text-[14.5px]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <div className="mt-28">
        <Newsletter />
      </div>
    </>
  );
}
