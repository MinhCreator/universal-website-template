import { motion } from 'framer-motion'
import { aboutData } from '../../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {aboutData.intro}
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {aboutData.story}
              </p>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-2 text-[var(--color-primary)]">Current Focus</h3>
                <p className="text-[var(--color-text-secondary)]">{aboutData.focus}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                    {stat.label === 'Years Experience' && '+'}
                    {stat.label === 'Projects Completed' && '+'}
                    {stat.label === 'Technologies Learned' && '+'}
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
