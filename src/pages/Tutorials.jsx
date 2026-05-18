import { motion } from 'framer-motion';
import { Clock, Award, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import Section, { SectionHeading } from '../components/Section';
import Newsletter from '../components/Newsletter';
import frenchPress from '../assets/images/tutorials/french-press.svg';
import espresso from '../assets/images/tutorials/espresso-basics.svg';
import latteArt from '../assets/images/tutorials/latte-art.svg';
import beans from '../assets/images/coffee/beans.svg';
import pourover from '../assets/images/coffee/pourover.svg';
import latte from '../assets/images/coffee/latte.svg';

const tutorials = [
  {
    img: pourover,
    level: 'Beginner',
    duration: '6 minutes',
    title: 'Your first pour-over, slowed down',
    body: 'A friendly, fool-proof recipe for a single cup of pour-over coffee. We focus on the rhythm of the pour and the warmth of the ritual.',
    steps: [
      'Weigh 20g of medium-fine coffee and rinse a paper filter.',
      'Bring 320g of water just off the boil. Pre-warm the cup.',
      'Bloom with 60g of water for 45 seconds.',
      'Pour in slow concentric circles. Finish at three minutes thirty.',
    ],
  },
  {
    img: frenchPress,
    level: 'Beginner',
    duration: '8 minutes',
    title: 'A flawless French press',
    body: 'The French press is the most forgiving brewer in your kitchen — once you stop pressing the plunger like you mean it.',
    steps: [
      'Coarse grind, 30g of coffee for 500g of water.',
      'Pour, stir gently, place the lid without pressing.',
      'Wait four minutes. Skim the surface foam.',
      'Press the plunger slowly, only halfway. Pour immediately.',
    ],
  },
  {
    img: espresso,
    level: 'Intermediate',
    duration: '12 minutes',
    title: 'Espresso basics at home',
    body: 'A starting framework for pulling a balanced shot — grind, dose, distribution, time. The rest is patience.',
    steps: [
      'Dose 18g into a clean basket. Level gently — no tamper yet.',
      'Distribute with the side of your finger or a WDT tool.',
      'Tamp firmly, perpendicular to the basket.',
      'Pull a 36g shot in 27–32 seconds. Taste. Adjust the grind.',
    ],
  },
  {
    img: latteArt,
    level: 'Intermediate',
    duration: '10 minutes',
    title: 'Your first heart in milk',
    body: 'The simplest piece of latte art, and the one most worth learning. The trick is in the texture of the milk, not the wrist.',
    steps: [
      'Steam milk to a wet-paint texture. Tap and swirl.',
      'Pour from a height to break the crema.',
      'Drop the pitcher close to the surface. Pour into the middle.',
      'Cut through the heart at the end with a thin stream.',
    ],
  },
  {
    img: beans,
    level: 'Beginner',
    duration: '5 minutes',
    title: 'How to read a bag of coffee',
    body: 'A practical guide to the labels on a specialty coffee bag — origin, process, roast date, tasting notes. Skip the marketing.',
    steps: [
      'Find the roast date. Aim to brew within 4 weeks.',
      'Find the origin and elevation — both matter.',
      'Note the process: washed, natural, honey.',
      'Use the tasting notes as a starting hypothesis, not a verdict.',
    ],
  },
  {
    img: latte,
    level: 'Intermediate',
    duration: '7 minutes',
    title: 'Brewing for two — a slow Sunday method',
    body: 'A pour-over recipe scaled for two cups. Same rhythm, slightly more patience, twice the warmth.',
    steps: [
      '40g coffee, 640g water. Medium grind.',
      'Bloom with 100g for one minute.',
      'Two slow pours, finishing at four minutes thirty.',
      'Pour into two pre-warmed cups. Sit at a window.',
    ],
  },
];

export default function Tutorials() {
  return (
    <>
      <PageHero
        eyebrow="Tutorials"
        title="Brew recipes you will keep using."
        lead="Short, repeatable tutorials for the brewing methods we actually use every morning. Nothing fussy, nothing fashionable — just methods that age well."
        image={espresso}
      />

      <Section className="mt-2">
        <SectionHeading
          eyebrow="Brew school"
          title="Six tutorials to take you from kettle to barista."
          lead="Beginner-friendly first, slightly more technical second. Bookmark whichever one matches the kit on your counter."
        />
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {tutorials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl overflow-hidden bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
            >
              <div className="grid sm:grid-cols-[180px_1fr]">
                <div className="aspect-[4/3] sm:aspect-auto sm:h-full">
                  <img src={t.img} alt={t.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[12.5px] text-mocha-600">
                    <span className="inline-flex items-center gap-1"><Award size={13} /> {t.level}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={13} /> {t.duration}</span>
                  </div>
                  <h3 className="mt-2 font-display text-[22px] text-espresso-900 leading-snug">{t.title}</h3>
                  <p className="mt-2 text-[14.5px] text-espresso-700/85 leading-relaxed">{t.body}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <ol className="space-y-2 text-[14.5px] text-espresso-800">
                  {t.steps.map((s, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-cream-200 border border-cream-300 grid place-items-center text-[12px] font-medium text-mocha-700">
                        {j + 1}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="mt-24">
        <div className="rounded-[32px] bg-espresso-grad text-cream-50 p-10 sm:p-14 grid lg:grid-cols-2 gap-10 items-center relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-caramel-500/20 blur-3xl rounded-full" />
          <div className="relative">
            <span className="text-[12.5px] tracking-[0.2em] uppercase text-caramel-300 font-medium">A starter kit</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              The four things on every Coffee Club kitchen counter.
            </h2>
            <ul className="mt-7 space-y-3 text-[15.5px] text-cream-200/90">
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-caramel-400" /><span>A burr grinder — even a modest one is transformative.</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-caramel-400" /><span>A gooseneck kettle, ideally with a temperature gauge.</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-caramel-400" /><span>A ceramic V60 or a French press.</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-caramel-400" /><span>A small kitchen scale — accuracy matters more than gear.</span></li>
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[5/4] shadow-cozy">
            <img src={beans} alt="A bag of beans on a counter" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <div className="mt-24">
        <Newsletter />
      </div>
    </>
  );
}
