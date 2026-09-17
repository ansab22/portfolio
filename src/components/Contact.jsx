import { useState } from 'react'
import { contact } from '../data'
import { MeshBackdrop } from './Decor'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!contact.web3formsAccessKey || contact.web3formsAccessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contact.web3formsAccessKey,
          subject: `New portfolio inquiry from ${form.name}`,
          from_name: form.name,
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <MeshBackdrop variant="gold" count={14} seed={9} />
      <div className="section__inner contact">
        <div className="contact__intro">
          <p className="section__label">Contact</p>
          <h2>{contact.heading}</h2>
          <p className="contact__body">{contact.body}</p>

          <div className="contact__links">
            <a href={`mailto:${contact.email}`} className="contact__link">
              <span className="contact__link-icon">✉</span> {contact.email}
            </a>
          </div>

          <div className="contact__platforms">
            <a
              href={contact.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-pill platform-pill--upwork"
            >
              <span className="platform-pill__badge">U</span>
              <span className="platform-pill__text">
                <strong>Upwork</strong>
                <small>View my freelancer profile ↗</small>
              </span>
            </a>
            <a
              href={contact.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-pill platform-pill--fiverr"
            >
              <span className="platform-pill__badge">F</span>
              <span className="platform-pill__text">
                <strong>Fiverr</strong>
                <small>View my gig profile ↗</small>
              </span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="contact-form__row">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about what you need built…"
            />
          </div>

          <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="contact-form__note contact-form__note--success">
              Message sent — I'll reply by email shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="contact-form__note contact-form__note--error">
              Something went wrong. Please email me directly at {contact.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
