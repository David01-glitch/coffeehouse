import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { site } from '../data/site';
import heroImg from '../assets/images/lifestyle/garden-coffee.svg';

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        lead="The simple rules that govern your use of this website, our newsletter, and our community meet-ups."
        image={heroImg}
      />
      <Section>
        <article className="prose-style max-w-3xl mx-auto text-[16px] leading-[1.85] text-espresso-800 space-y-6">
          <p><strong>Last updated:</strong> May 1, 2026</p>

          <p>
            By visiting coffeeclub.example or any of our affiliated services, you agree to these
            Terms of Service. If you do not agree, please do not use the site.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">1. Use of the site</h2>
          <p>
            You may read, share, and quote our articles for personal and non-commercial purposes,
            with attribution back to Coffee Club. You may not republish full articles, scrape the
            site, or use our content to train commercial AI models without written permission.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">2. The newsletter</h2>
          <p>
            The Sunday Brew is currently free. We reserve the right to introduce a paid tier in the
            future. Existing subscribers will be notified at least 30 days in advance of any change.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">3. Community meet-ups</h2>
          <p>
            Attendance at any Coffee Club meet-up is voluntary and at your own risk. Hosts are
            volunteers, not employees. We ask all attendees to be kind, on time, and respectful of
            the cafés that host us.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">4. User-submitted content</h2>
          <p>
            When you send us a message, café recommendation, or testimonial, you grant us a
            non-exclusive, royalty-free license to publish it (in whole or in part) with attribution
            in our newsletter or on this site. We will never share your email without permission.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">5. Third-party links</h2>
          <p>
            Articles on this site link to cafés, books, and tools we love. We do not control the
            content of those external sites and are not responsible for their availability or
            policies.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">6. Disclaimer</h2>
          <p>
            Coffee Club publishes lifestyle essays and opinions, not professional advice. Anything
            we write about coffee, mornings, or community is offered in good faith but without
            warranty of any kind.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">7. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Coffee Club is not liable for any indirect,
            incidental, or consequential damages arising from your use of the site, newsletter, or
            participation in any meet-up.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">8. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Maine, USA. Any disputes will be
            resolved in the state or federal courts located in Cumberland County, Maine.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">9. Contact</h2>
          <p>
            Questions about these terms? Email <a className="text-mocha-700" href={`mailto:${site.email}`}>{site.email}</a>,
            call {site.phone}, or write to {site.address}.
          </p>
        </article>
      </Section>
    </>
  );
}
