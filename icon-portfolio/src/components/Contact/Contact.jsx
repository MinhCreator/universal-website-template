import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Code2, Briefcase, MessageCircle, SendHorizonal } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'

const socialLinks = [
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  { icon: Code2, href: personalInfo.social.github, label: 'GitHub' },
  { icon: Briefcase, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: MessageCircle, href: personalInfo.social.facebook, label: 'Facebook' },
  { icon: SendHorizonal, href: personalInfo.social.telegram, label: 'Telegram' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)

    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                    errors.name ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                    errors.email ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl glass-card text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                    errors.subject ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl glass-card text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] ${
                    errors.message ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-[var(--color-primary)]/30"
              >
                <Send size={18} />
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start justify-center space-y-6"
          >
            <div className="glass-card p-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[var(--color-text-secondary)]">
                  <Mail size={18} className="text-[var(--color-primary)]" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-[var(--color-primary)] transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
