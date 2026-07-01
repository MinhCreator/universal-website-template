import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonialsData } from '../../data/portfolioData'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % testimonialsData.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonialsData.length) % testimonialsData.length)

  return (
    <section className="relative py-24 bg-[var(--color-bg-secondary)]/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full glass-card hover:text-[var(--color-primary)] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex-1 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8 text-center"
                >
                  <Quote size={32} className="mx-auto mb-4 text-[var(--color-primary)] opacity-50" />
                  <p className="text-lg text-[var(--color-text-secondary)] mb-6 italic leading-relaxed">
                    "{testimonialsData[current].review}"
                  </p>
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold text-xl">
                    {testimonialsData[current].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="font-semibold">{testimonialsData[current].name}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">{testimonialsData[current].position}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full glass-card hover:text-[var(--color-primary)] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current
                    ? 'bg-[var(--color-primary)] w-8'
                    : 'bg-[var(--color-text-secondary)]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
