import { motion } from 'framer-motion'
import { experienceData } from '../../data/portfolioData'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-[var(--color-bg-secondary)]/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent -translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-[var(--color-primary)] font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">{exp.duration}</p>
                  <p className="text-[var(--color-text-secondary)]">{exp.description}</p>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-card flex items-center justify-center z-10">
                <Briefcase size={18} className="text-[var(--color-primary)]" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
