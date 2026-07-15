import useReveal from './hooks/useReveal'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Architecture from './components/Architecture'
import Experience from './components/Experience'
import Fun from './components/Fun'
import Contact from './components/Contact'

export default function App() {
  useReveal()
  return (
    <>
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Architecture />
        <Fun />
        <Contact />
      </main>
    </>
  )
}
