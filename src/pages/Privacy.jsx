import PageHero from '../components/PageHero';
import Section from '../components/Section';
import { site } from '../data/site';
import heroImg from '../assets/images/lifestyle/scandi-living.jpg';

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="A plain-language explanation of what we collect, how we use it, and how to ask us to stop."
        image={heroImg}
      />
      <Section>
        <article className="prose-style max-w-3xl mx-auto text-[16px] leading-[1.85] text-espresso-800 space-y-6">
          <p><strong>Last updated:</strong> May 1, 2026</p>

          <p>
            Coffee Club (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates this website and the Sunday
            Brew newsletter. This policy explains the personal information we collect when you
            visit or subscribe, and the choices you have about that information.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">1. Information we collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Information you give us</strong> — your name and email when you subscribe to the newsletter or send a message via the contact form.</li>
            <li><strong>Information collected automatically</strong> — anonymous usage data such as pages visited, approximate location (country/region), device type, and referring site. We use Google Analytics 4 with anonymized IP for this.</li>
            <li><strong>Cookies</strong> — small files stored in your browser to remember your consent preferences and enable analytics if you opt in.</li>
          </ul>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">2. How we use information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To send the weekly newsletter and respond to messages you send us.</li>
            <li>To understand which essays and pages our readers find valuable, in aggregate.</li>
            <li>To improve the security, reliability, and performance of the site.</li>
          </ul>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">3. Google Consent Mode V2</h2>
          <p>
            By default, we treat analytics and advertising cookies as <em>denied</em>. We only enable
            analytics cookies after you click &ldquo;Accept&rdquo; on the cookie banner. If you
            decline, the site continues to work without sending analytics data.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">4. Sharing</h2>
          <p>
            We do not sell personal information. We share limited information only with trusted
            service providers that help us run the site (hosting, analytics, email delivery), and
            only as needed to provide the service.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">5. Your rights</h2>
          <p>
            You can unsubscribe from the newsletter at any time using the link at the bottom of any
            email. You can ask us to delete the personal information we hold about you by emailing
            <a className="text-mocha-700 hover:text-espresso-900" href={`mailto:${site.email}`}> {site.email}</a>.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">6. Children</h2>
          <p>
            Coffee Club is intended for adults. We do not knowingly collect personal information
            from anyone under 16. If you believe a child has provided information to us, please
            contact us so we can delete it.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">7. Changes</h2>
          <p>
            We may update this policy from time to time. The date at the top will always reflect
            the latest revision. Material changes will be announced in the Sunday Brew newsletter.
          </p>

          <h2 className="font-display text-2xl text-espresso-900 mt-10">8. Contact</h2>
          <p>
            Questions? Email <a className="text-mocha-700" href={`mailto:${site.email}`}>{site.email}</a>, call {site.phone}, or write to {site.address}.
          </p>
        </article>
      </Section>
    </>
  );
}
