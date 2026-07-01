import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const Navbar = lazy(() => import('./components/Navbar/Navbar'))
const Hero = lazy(() => import('./components/Hero/Hero'))
const About = lazy(() => import('./components/About/About'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Experience = lazy(() => import('./components/Experience/Experience'))
const Education = lazy(() => import('./components/Education/Education'))
const Services = lazy(() => import('./components/Services/Services'))
const Statistics = lazy(() => import('./components/Statistics/Statistics'))
const Testimonials = lazy(() => import('./components/Testimonials/Testimonials'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Statistics />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
    </>
  )
}
