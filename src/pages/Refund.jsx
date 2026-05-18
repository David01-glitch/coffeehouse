import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { site } from '../data/site';
import heroImg from '../assets/images/cafes/wood-counter.jpg';

export default function Refund() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        lead="A straightforward, friendly refund policy for our paid products and events."
        image={heroImg}
      />
      <Section>
        <article className="prose-style max-w-3xl mx-auto text-[16px] leading-[1.85] text-espresso-800 space-y-6">
          <p><strong>Last updated:</strong> May 1, 2026</p>

          <p>
            We want every Coffee Club purchase to feel as warm and easy as a Saturday coffee. If
            something is not right, we will make it right.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">1. The Sunday Brew newsletter</h2>
          <p>
            The Sunday Brew is currently free. There is nothing to refund — but if a paid tier is
            ever introduced, you may cancel for a full refund within 14 days of any new subscription.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">2. Workshops and events</h2>
          <p>
            Most of our community meet-ups are free. For paid workshops or ticketed events:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full refund if you cancel <strong>more than 7 days</strong> before the event.</li>
            <li>50% refund if you cancel <strong>3–7 days</strong> before the event.</li>
            <li>No refund within 72 hours, but you may transfer your ticket to a friend.</li>
            <li>If we cancel the event for any reason, you receive a full refund automatically.</li>
          </ul>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">3. Books, zines, and physical products</h2>
          <p>
            Returns are accepted within 30 days of delivery for unopened items in original
            condition. Email us first so we can send a return label. Refunds are issued to the
            original payment method within 5–10 business days of receiving the return.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">4. Digital products</h2>
          <p>
            Digital downloads (PDF guides, Café Atlas editions, recipe packs) are refundable within
            14 days of purchase if you have not extensively used the product. Just email us.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">5. How to request a refund</h2>
          <p>
            Email <a className="text-mocha-700" href={`mailto:${site.email}`}>{site.email}</a> with your order number, the product or
            ticket in question, and a short note about what is wrong. We aim to reply within two
            business days.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">6. Our promise</h2>
          <p>
            If you ever feel a refund is fair and our policy gets in the way, write to us anyway.
            We are a small team and we would rather lose a few dollars than lose a reader.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">7. Contact</h2>
          <p>
            Coffee Club<br />
            {site.address}<br />
            <a className="text-mocha-700" href={`mailto:${site.email}`}>{site.email}</a> · {site.phone}
          </p>
        </article>
      </Section>
    </>
  );
}
