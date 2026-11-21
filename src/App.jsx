import Background from './components/Background'
import ScrollProgress from './components/ScrollProgress'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Flow from './components/Flow'
import Projects from './components/Projects'
import WhyMe from './components/WhyMe'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certification from './components/Certification'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Flow />
        <Projects />
        <WhyMe />
        <About />
        <Skills />
        <Experience />
        <Certification />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
