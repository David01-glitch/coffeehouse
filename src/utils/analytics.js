// Google Analytics + Consent Mode V2 helpers

export const GA_ID = 'G-4J046JXWVC';

const hasGtag = () => typeof window !== 'undefined' && typeof window.gtag === 'function';

export function trackEvent(eventName, params = {}) {
  if (!hasGtag()) return;
  try {
    window.gtag('event', eventName, params);
  } catch (e) {
    // silent
  }
}

export function trackPageView(path, title) {
  if (!hasGtag()) return;
  try {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title,
      page_location: window.location.href,
    });
  } catch (e) {}
}

export function grantConsent() {
  if (!hasGtag()) return;
  window.gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
}

export function denyConsent() {
  if (!hasGtag()) return;
  window.gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
}

// Common tracked events
export const Events = {
  navClick: (label) => trackEvent('nav_click', { label }),
  ctaClick: (label) => trackEvent('cta_click', { label }),
  hobbyExpand: (label) => trackEvent('hobby_expand', { label }),
  articleExpand: (label) => trackEvent('article_expand', { label }),
  articleShare: (label) => trackEvent('article_share', { label }),
  newsletterSignup: () => trackEvent('newsletter_signup'),
  contactSubmit: () => trackEvent('contact_submit'),
  cookieConsent: (decision) => trackEvent('cookie_consent', { decision }),
};
