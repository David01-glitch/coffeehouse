import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Coffee, Sun, Users, Sparkles } from 'lucide-react';
import { findCategory, categories } from '../data/categories';
import { articles } from '../data/articles';
import PageHero from '../components/PageHero';
import Section, { SectionHeading } from '../components/Section';
import Newsletter from '../components/Newsletter';
import NotFound from './NotFound';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = findCategory(slug);
  if (!category) return <NotFound />;

  const related = articles.filter((a) => a.category.toLowerCase().includes(category.title.toLowerCase().split(' ')[0].toLowerCase())).slice(0, 3);
  const others = categories.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.title}
        lead={category.blurb}
        image={category.image}
      />

      <Section>
        <Link to="/" className="inline-flex items-center gap-2 text-mocha-700 text-sm font-medium hover:text-espresso-900">
          <ArrowLeft size={15} /> Back to home
        </Link>

        <div className="mt-10 grid lg:grid-cols-12 gap-10">
          <article className="lg:col-span-8 space-y-8 text-[16.5px] leading-[1.8] text-espresso-800">
            <p className="text-[18px] text-espresso-700/90 leading-relaxed font-display italic">
              {category.intro}
            </p>

            <Block icon={Coffee} title="Coffee recommendations" items={category.recommendations} />
            <Block icon={Sun} title="Morning routine ideas" items={category.morning} />
            <Block icon={Users} title="Social lifestyle tips" items={category.lifestyle} />

            <div className="rounded-3xl bg-espresso-grad text-cream-50 p-7 sm:p-9">
              <div className="flex items-center gap-2 text-caramel-300">
                <Sparkles size={16} />
                <span className="text-[12.5px] tracking-[0.2em] uppercase font-medium">Beginner guidance</span>
              </div>
              <p className="mt-3 text-cream-100/90 text-[15.5px] leading-relaxed">{category.beginner}</p>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-cream-50 border border-cream-200 shadow-soft p-6">
              <h3 className="font-display text-xl text-espresso-900">Other paths</h3>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/category/${o.slug}`}
                      className="flex items-center gap-3 p-3 rounded-2xl hover:bg-cream-100 transition"
                    >
                      <img src={o.image} alt={o.title} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <p className="font-medium text-espresso-900">{o.title}</p>
                        <p className="text-[12.5px] text-mocha-600">Explore →</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {related.length > 0 && (
              <div className="rounded-3xl bg-cream-50 border border-cream-200 shadow-soft p-6">
                <h3 className="font-display text-xl text-espresso-900">Related reading</h3>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.id}>
                      <Link to={`/blog#${r.id}`} className="flex items-center gap-3 p-3 rounded-2xl hover:bg-cream-100 transition">
                        <img src={r.image} alt={r.title} className="w-12 h-12 rounded-xl object-cover" />
                        <div>
                          <p className="font-medium text-espresso-900 text-[14.5px] leading-tight">{r.title}</p>
                          <p className="text-[12.5px] text-mocha-600">{r.readTime}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      <Section className="mt-24">
        <SectionHeading
          eyebrow="Keep exploring"
          title="Other corners of the club."
          align="center"
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter((c) => c.slug !== slug).map((c) => (
            <Link
              key={c.slug}
              to={`/category/${c.slug}`}
              className="group rounded-3xl overflow-hidden bg-cream-50 border border-cream-200 shadow-soft hover:shadow-cozy transition-shadow"
            >
              <div className="aspect-[5/3] overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-display text-lg text-espresso-900">{c.title}</h3>
                <ArrowRight size={16} className="text-mocha-700 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <div className="mt-24">
        <Newsletter />
      </div>
    </>
  );
}

function Block({ icon: Icon, title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-cream-50 border border-cream-200 shadow-soft p-7"
    >
      <div className="flex items-center gap-2 text-mocha-700">
        <Icon size={17} />
        <h3 className="font-display text-xl text-espresso-900">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2.5 text-[15.5px] text-espresso-800">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3"><span className="text-caramel-500 mt-2">•</span><span>{it}</span></li>
        ))}
      </ul>
    </motion.div>
  );
}
