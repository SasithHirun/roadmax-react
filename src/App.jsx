import { useEffect, useRef, useState } from 'react'
import logoLight from './assets/logo-light.png'
import logoDark from './assets/logo-dark.png'
import { PHONE, TEL, NAV, STRIP, FEATURES, ABOUT_CARDS, SERVICES, SOCIAL, FAQS, P, van } from './data'

const Icon = ({ d }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>

/* Fades and slides an element in the first time it scrolls into view. */
function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el)   
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

const Logo = ({ dark }) => (
  <a href="#top" className="logo" aria-label="RoadMax home">
    <img src= {dark ? logoDark : logoLight} alt="RoadMax - Built for the road ahead" width="158" height="50" />
  </a>
)

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="wrap">
        <Logo />
        <button className="menu"  aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
        <nav className={open ? 'show' : ''}>
          {NAV.map(([t, u]) => <a key={u} href={u} onClick={() => setOpen(false)}>{t}</a>)}
          <a href={TEL}   className="btn p" style={{ padding: '9px 18px' }}>{PHONE}</a>
        </nav>
      </div>
    </header>    
  )   
}

function Hero() {   
  return (
    <div id="top" className="hero">
      <div className="wrap">
        <div>
          <h1>
            <span className="up" style={{ '--d': '100ms' }}>We keep</span>
            <span className="r up" style={{ '--d': '250ms' }}>you moving.</span>
          </h1>
          <p className="up" style={{ '--d': '400ms' }}>Mobile tyre fitting and balancing that comes to you. New and used tyres from premium brands, for drivers and trade.</p>
          <div className="cta up" style={{ '--d': '550ms' }}>
            <a href={TEL} className="btn p">Call {PHONE}</a>
            <a href="#contact" className="btn o">Request a visit</a>
          </div>
        </div>
        <img className="van" src={van} alt="RoadMax mobile tyre service van" width="637" height="417" />
      </div>
      <div className="strip">
        <div className="wrap">{STRIP.map((s) => <span key={s}>{s}</span>)}</div>
      </div>
    </div>
  )
}

function Features() {
  return (
    <section className="feat" aria-label="What we offer">
      <div className="wrap">
        <ul className="fg">
          {FEATURES.map((f, i) => (
            <Reveal as="li" key={f.title} className="fc" delay={i * 120}>
              <div className="fw"><img src={f.img} alt="" loading="lazy" /></div>
              <div className="fb">
                <span className="fi"><Icon d={f.icon} /></span>
                <div><h3>{f.title}</h3>{f.sub && <p>{f.sub}</p>}</div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <Reveal>
          <h2>Built for the road ahead</h2>
          <p>RoadMax is a mobile tyre service. Instead of booking a garage and waiting around, we bring the tyres and the equipment to you.</p>
          <p>We stock a wide range of new and used tyres across premium brands, and we sell to both the public and the trade. Great tyres, great service, great prices.</p>
          <a href="#contact" className="btn p" style={{ marginTop: 8 }}>Get in touch</a>
        </Reveal>
        <div className="svc">
          {ABOUT_CARDS.map(([t, d, icon], i) => (
            <Reveal key={t} className="sc" delay={i * 120}>
              <span className="si"><Icon d={icon} /></span>
              <h3>{t}</h3>
              <p>{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="wrap">
        <Reveal className="sh">
          <h2>Our services</h2>
          <p>Tyres, wheels and batteries, all brought to you by our mobile team.</p>
        </Reveal>
        <div className="sg">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} className={`sv ${s.emergency ? 'em' : ''}`} delay={(i % 4) * 110}>
              <div className="ph">
                <div className="iw"><img src={s.img} alt="" loading="lazy" /></div>
                <span className="vi"><Icon d={s.icon} /></span>
              </div>
              <div className="tx">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
                {s.emergency && <a href={TEL} className="btn">Call {PHONE}</a>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CallNow() {
  return (
    <section id="call" className="call">
      <Reveal className="wrap">
        <h2>Flat tyre? Need a set?</h2>
        <p>Call or message us. Tell us your tyre size and location and we will get you moving.</p>
        <a href={TEL} className="num">{PHONE}</a>
        <div className="cta" style={{ justifyContent: 'center' }}>
          <a href={TEL} className="btn p">Call now</a>
          <a href="sms:0412344591" className="btn o">Send a message</a>
        </div>
      </Reveal>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq">
      <div className="wrap">
        <div className="faq">
          <Reveal><h2>Frequently asked questions</h2></Reveal>
          {FAQS.map(([q, a], i) => (
            <Reveal key={q} className={`q ${open === i ? 'open' : ''}`} delay={i * 70}>
              <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}<i>+</i></button>
              <div className="ar"><div className="ai"><div className="a">{a}</div></div></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => { e.preventDefault(); setSent(true) } // TODO: connect to your email/backend service
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal>
          <h2>Contact us</h2>
          <div className="card">
            <div className="row"><span className="ic"><Icon d={P.phone} /></span><div><small>Call or message</small><a href={TEL}><strong>{PHONE}</strong></a></div></div>
            <div className="row"><span className="ic"><Icon d={P.fb} /></span><div><small>Find us on</small><strong>Facebook Marketplace</strong></div></div>
            <div className="row"><span className="ic"><Icon d={P.pin} /></span><div><small>Service</small><strong>Mobile, we come to you</strong></div></div>
          </div>
          <div className="soc">
            {SOCIAL.map(([n, d, u]) => <a key={n} href={u} target="_blank" rel="noopener noreferrer" aria-label={n}><Icon d={d} /></a>)}
          </div>
        </Reveal>
        <Reveal as="form" className="card" delay={150} onSubmit={onSubmit}>
          <h3 style={{ fontSize: 30, marginBottom: 16 }}>Request a callback</h3>
          {sent ? (
            <div className="ok" role="status">Thanks, your request is noted. For the fastest reply, call {PHONE}.</div>
          ) : (
            <>
              <label htmlFor="n">Name</label><input id="n" required autoComplete="name" />
              <label htmlFor="p">Phone</label><input id="p" type="tel" required autoComplete="tel" />
              <label htmlFor="s">What do you need?</label>
              <select id="s">{['Tyre fitting', 'Wheel balancing', 'New tyres', 'Used tyres', 'Bulk / trade order'].map((o) => <option key={o}>{o}</option>)}</select>
              <label htmlFor="m">Tyre size and location</label>
              <textarea id="m" rows="3" placeholder="e.g. 205/55R16, Mount Lavinia" />
              <button className="btn p" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Send request</button>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main><Hero /><Features /><About /><Services /><CallNow /><FAQ /><Contact /></main>
      <footer>
        <div className="wrap" style={{ alignItems: 'center' }}>
          <Logo dark />
          <span>© 2026 RoadMax. We keep you moving.</span>
          <a href={TEL} style={{ color: '#fff', fontWeight: 700 }}>{PHONE}</a>
        </div>
      </footer>
    </>
  )
}
