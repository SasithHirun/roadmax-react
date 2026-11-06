import { P, I } from './icons'
import van from './assets/van.jpg'
import f1 from './assets/feat-1.jpg'
import f2 from './assets/feat-2.jpg'
import f3 from './assets/feat-3.jpg'
import f4 from './assets/feat-4.jpg'
import sFit from './assets/svc-fit.jpg'
import sNew from './assets/svc-new.jpg'
import sUsed from './assets/svc-used.jpg'
import sRep from './assets/svc-rep.jpg'
import sPunc from './assets/svc-punc.jpg'
import sBal from './assets/svc-bal.jpg'
import sBatt from './assets/svc-batt.jpg'
import sVan from './assets/svc-van.jpg'

export const PHONE = '04 1234 45 91'
export const TEL = 'tel:0412344591'
export { P, van }

export const NAV = [['About', '#about'], ['Services', '#services'], ['Call now', '#call'], ['FAQ', '#faq'], ['Contact', '#contact']]
export const STRIP = ['Great selection', 'Competitive prices', 'Fast & friendly service', 'Bulk orders welcome']

export const FEATURES = [
  { title: 'New & used tyres', sub: 'Premium brands', icon: I.tyre, img: f1 },
  { title: 'Fast & reliable', sub: 'Service', icon: P.phone, img: f2 },
  { title: 'Bulk orders welcome', sub: '', icon: 'M12 2 3 7v10l9 5 9-5V7l-9-5zm0 2.2 6.3 3.5L12 11.2 5.7 7.7 12 4.2zM5 9.4l6 3.3v6.6l-6-3.3V9.4zm14 0v6.6l-6 3.3v-6.6l6-3.3z', img: f3 },
  { title: 'Trade & public', sub: 'Welcome', icon: 'M16 11a3 3 0 100-6 3 3 0 000 6zM8 11a3 3 0 100-6 3 3 0 000 6zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.6 0-1 .1 1.2.8 2 1.9 2 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z', img: f4 },
]

export const ABOUT_CARDS = [
  ['Tyre fitting', 'Fitted at your home, work or roadside.', I.wrench],
  ['Wheel balancing', 'Smoother ride and even tyre wear.', I.bal],
  ['New & used tyres', 'Quality stock at fair prices.', I.tag],
  ['Trade & public', 'Bulk orders welcome for fleets and garages.', FEATURES[3].icon],
]

export const SERVICES = [
  { t: 'Mobile tyre fitting', d: 'We bring the equipment and fit your tyres at your home or workplace.', icon: I.wrench, img: sFit },
  { t: 'New tyres supply & installation', d: 'Premium brand new tyres supplied and fitted in one visit.', icon: I.tyre, img: sNew },
  { t: 'Second-hand tyres sales & fitting', d: 'Quality used tyres at lower prices, checked and fitted for you.', icon: I.tag, img: sUsed },
  { t: 'Mobile tyre repairs', d: 'On-site tyre repairs so you can get back on the road sooner.', icon: I.gear, img: sRep },
  { t: 'Puncture repairs', d: 'Fast puncture repairs, done wherever your vehicle is parked.', icon: I.alert, img: sPunc },
  { t: 'Wheel balancing', d: 'Balanced wheels for a smoother ride and even tyre wear.', icon: I.bal, img: sBal },
  { t: 'Car battery supply & replacement', d: 'A flat battery? We supply and replace it for you.', icon: I.batt, img: sBatt },
  { t: 'Emergency roadside tyre assistance', d: 'Stuck with a flat or blown tyre? Call us and we will come to you.', icon: I.warn, img: sVan, emergency: true },
]

export const SOCIAL = [
  ['Facebook Marketplace', P.fb, 'https://www.facebook.com/'],
  ['Instagram', P.ig, 'https://www.instagram.com/'],
  ['WhatsApp', P.wa, 'https://wa.me/61412344591'],
]

export const FAQS = [
  ['Do you come to me?', 'Yes. RoadMax is a mobile service, so we fit and balance tyres at your home, workplace or roadside.'],
  ['Do you sell new and used tyres?', 'Both. We stock new and used tyres across premium brands, so you can choose by budget.'],
  ['Can trade customers order in bulk?', 'Yes. We sell to trade and public, and bulk orders are welcome. Call us for a quote.'],
  ['How do I book?', `Call or message ${PHONE}, or send a request through the form above. Have your tyre size ready if you can.`],
  ['How do I find the right tyre size?', 'The size is printed on the tyre sidewall, for example 205/55R16. If you are unsure, send us a photo and we will check.'],
  ['Where else can I find you?', 'Search for RoadMax on Facebook Marketplace to see current stock.'],
]
