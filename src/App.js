import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="scroll-smooth">
      <Nav />
      <Hero />
      <Projects />
      <TechStack />
      <About />
      <Footer />
    </div>
  )
}

export default App
