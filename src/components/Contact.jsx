import { useState } from 'react'
import { contact } from '../data'
import Icon from './Icons'
import Reveal from './Reveal'

const initialForm = { name: '', email: '', need: 'AI automation', message: '' }
const NEEDS = ['AI automation', 'New website', 'Web app', 'Fix / improve my site', 'Not sure yet']

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')

  const change = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function submit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contact.web3formsAccessKey,
          subject: `New portfolio inquiry (${form.need}) from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) { setStatus('success'); setForm(initialForm) } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="section__inner contact">
        <Reveal className="contact__intro" from="left">
          <p className="eyebrow">Contact</p>
          <h2>{contact.heading}</h2>
          <p className="contact__body">{contact.body}</p>
          <a href={`mailto:${contact.email}`} className="contact__mail"><Icon name="mail" /> {contact.email}</a>
          <div className="contact__links">
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="pill pill--link">LinkedIn ↗</a>
            <a href={contact.upwork} target="_blank" rel="noopener noreferrer" className="pill pill--link">Upwork ↗</a>
          </div>
        </Reveal>

        <Reveal as="form" className="card contact-form" onSubmit={submit} from="right">
          <div className="terminal__bar terminal__bar--form">
            <span className="terminal__dot terminal__dot--r" /><span className="terminal__dot terminal__dot--y" /><span className="terminal__dot terminal__dot--g" />
            <span className="terminal__title">Start a project</span>
          </div>
          <div className="contact-form__grid">
            <label>Name<input name="name" required value={form.name} onChange={change} placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required value={form.email} onChange={change} placeholder="you@company.com" /></label>
          </div>
          <div className="contact-form__needs" role="radiogroup" aria-label="What do you need?">
            {NEEDS.map((n) => (
              <button type="button" key={n} className={`pill pill--choice ${form.need === n ? 'is-on' : ''}`}
                aria-pressed={form.need === n} onClick={() => setForm((f) => ({ ...f, need: n }))}>{n}</button>
            ))}
          </div>
          <label>Tell me about your project<textarea name="message" required rows={5} value={form.message} onChange={change} placeholder="Tell me what you want to build or automate…" /></label>
          <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message →'}
          </button>
          {status === 'success' && <p className="form-note form-note--ok">✓ Message sent. I'll reply by email within 24 hours.</p>}
          {status === 'error' && <p className="form-note form-note--err">Something went wrong. Please email me at {contact.email}.</p>}
        </Reveal>
      </div>
    </section>
  )
}
