import coffeeCulture from '../assets/images/categories/coffee-culture.jpg';
import cafeReviews from '../assets/images/categories/cafe-reviews.jpg';
import morningRoutines from '../assets/images/categories/morning-routines.jpg';
import conversation from '../assets/images/categories/conversation-topics.jpg';
import relaxedLiving from '../assets/images/categories/relaxed-living.jpg';
import retirementSocial from '../assets/images/categories/retirement-social.jpg';

export const categories = [
  {
    slug: 'coffee-culture',
    title: 'Coffee Culture',
    blurb: 'From single-origin pour-overs to neighborhood espresso bars, explore the rituals shaping modern coffee.',
    image: coffeeCulture,
    intro:
      'Coffee culture is more than caffeine — it is a daily ritual that quietly shapes how we begin our mornings, who we share our tables with, and how we measure the rhythm of a slow afternoon. From Portland to Melbourne, modern coffee culture blends craft, community, and considered design.',
    recommendations: [
      'Ethiopia Yirgacheffe — bright, floral, perfect for warm afternoons',
      'Colombian Huila — chocolatey, rounded, beautiful with milk',
      'Sumatra Mandheling — earthy and full-bodied for slow mornings',
    ],
    morning: [
      'Pre-warm your cup before brewing — it changes everything',
      'Grind beans within 30 seconds of brewing',
      'Keep a small notebook beside your kettle for tasting notes',
    ],
    lifestyle: [
      'Invest in one mug you genuinely love',
      'Choose one café to make “yours” — become a regular',
      'Schedule one slow Saturday a month with no agenda',
    ],
    beginner:
      'Start with a simple pour-over kit and a single bag of fresh, locally roasted beans. Brew the same way every morning for two weeks. You will quickly notice what you love — and what you want to change.',
  },
  {
    slug: 'cafe-reviews',
    title: 'Café Reviews',
    blurb: 'Honest, atmosphere-first reviews of independent cafés worth driving across town for.',
    image: cafeReviews,
    intro:
      'We review cafés the way you actually visit them — for the way the morning light hits the counter, the warmth of the welcome, the quality of the cup, and whether you want to come back tomorrow. We focus on independents.',
    recommendations: [
      'Tandem Coffee + Bakery, Portland — for slow Sunday breakfasts',
      'Speckled Ax, Portland — wood-fired roast, deeply considered',
      'Bard Coffee, Portland — bright, modern, brilliant baristas',
    ],
    morning: [
      'Arrive 30 minutes before peak hour for the best seat',
      'Order the house drip first — it tells you everything',
      'Sit at the counter the first time you visit',
    ],
    lifestyle: [
      'Tip generously — independent cafés survive on it',
      'Bring a friend who never gets to slow down',
      'Try one new café each month, even when your regular is perfect',
    ],
    beginner:
      'Make a short list of three cafés near you. Visit each one twice — once on a weekday morning, once on a weekend. You will know your favorite within four visits.',
  },
  {
    slug: 'morning-routines',
    title: 'Morning Routines',
    blurb: 'Gentle, repeatable morning rituals that protect your first hour and shape the rest of the day.',
    image: morningRoutines,
    intro:
      'The first hour of the day is the one you can most reliably protect. We design morning routines around warmth, slowness, and a single cup of really good coffee — not productivity for its own sake.',
    recommendations: [
      'Drink water before coffee — it transforms how the cup tastes',
      'Brew with intent: one method, done well',
      'Choose a light second drink for mid-morning (oat cortado, anyone?)',
    ],
    morning: [
      'Five minutes by a window before checking any screen',
      'Pour the kettle slowly — the ritual matters as much as the cup',
      'Write three lines in a notebook while it brews',
    ],
    lifestyle: [
      'Keep your morning corner uncluttered and beautiful',
      'Invite one person to share your morning once a week',
      'Refuse the news for the first 30 minutes',
    ],
    beginner:
      'Begin with one change: brew a single cup using the same method for fourteen mornings. The rest of the routine will quietly assemble itself around it.',
  },
  {
    slug: 'conversation-topics',
    title: 'Conversation Topics',
    blurb: 'Prompts and questions for the kind of conversations that turn coffee dates into lasting friendships.',
    image: conversation,
    intro:
      'Real conversation is becoming the rarest luxury. We collect questions, prompts, and gentle frameworks for the kind of table-talk that turns strangers into regulars and acquaintances into friends.',
    recommendations: [
      '“What is something small that made this week feel like yours?”',
      '“Where did you grow up — and where do you still feel at home?”',
      '“What is a habit you have grown into rather than chosen?”',
    ],
    morning: [
      'One question, asked sincerely, beats ten asked casually',
      'Leave a pause after the answer — that is where the real conversation starts',
      'Notice the cup. Ask about it. Cafés are full of openings.',
    ],
    lifestyle: [
      'Invite one new person to coffee each month',
      'Keep your phone face-down on the table',
      'Trade book recommendations, not opinions',
    ],
    beginner:
      'Pick a single thoughtful question and bring it to your next coffee. You do not need a script — you need permission to slow down.',
  },
  {
    slug: 'relaxed-living',
    title: 'Relaxed Living',
    blurb: 'A modern, considered approach to slow, warm, social living — without the wellness clichés.',
    image: relaxedLiving,
    intro:
      'Relaxed living is not a productivity hack or a wellness trend — it is a choice to design your weeks around warmth, beauty, and presence. We share gentle, sustainable ways to make daily life feel a little more cinematic.',
    recommendations: [
      'A single beautiful mug used daily beats a cupboard of pretty ones',
      'Linen napkins, even for one',
      'Warm bulbs everywhere — 2700K or lower',
    ],
    morning: [
      'Make your bed before your coffee, every day',
      'Step outside before you scroll',
      'Put on something you would happily run into a neighbor in',
    ],
    lifestyle: [
      'One unscheduled afternoon per week, protected',
      'A weekly walk with a friend, same time, no agenda',
      'A bookshelf curated for re-reading, not impressing',
    ],
    beginner:
      'Pick the room you spend the most time in. Remove three things. Add one warm lamp. Notice how the room — and your week — start to feel different.',
  },
  {
    slug: 'retirement-social-life',
    title: 'Retirement Social Life',
    blurb: 'A modern, vibrant social life after work — built around coffee, conversation, and small community.',
    image: retirementSocial,
    intro:
      'Retirement is not a slowdown — for many of our community, it is the most social, creative chapter of life. We share ways to build a vibrant weekly rhythm of friends, cafés, walking groups, and shared rituals.',
    recommendations: [
      'A weekly café morning with the same two or three friends',
      'A monthly “new place” outing — somewhere none of you have been',
      'A standing Sunday phone call with someone far away',
    ],
    morning: [
      'Walk to coffee whenever you can — it changes the day',
      'Sit at the counter and chat with the barista',
      'Read the paper there, not at home',
    ],
    lifestyle: [
      'Join one local group, even if it feels awkward at first',
      'Host once a season — small, warm, easy',
      'Be the person who organizes — others are waiting',
    ],
    beginner:
      'Send a single message today: “Coffee Tuesday at 10?” That is the entire system. The hardest part is starting; the rest takes care of itself.',
  },
];

export const findCategory = (slug) => categories.find((c) => c.slug === slug);
