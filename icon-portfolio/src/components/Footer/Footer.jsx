import { motion } from 'framer-motion'
import { Code2, Briefcase, Mail, Heart } from 'lucide-react'
import { personalInfo, navLinks } from '../../data/portfolioData'

export default function Footer() {
  const scrollTo = (href) => {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative py-12 border-t border-[var(--color-glass-border)]">
      <div className="section-container !py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <button onClick={() => scrollTo('#home')} className="text-xl font-bold gradient-text mb-3 block">
              {'<JD />'}
            </button>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Full Stack Developer crafting digital experiences.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all"
              >
                <Code2 size={18} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all"
              >
                <Briefcase size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg glass-card text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--color-glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-secondary)] flex items-center gap-1">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Made with <Heart size={14} className="text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  )
}
