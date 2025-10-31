import './App.css'
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import Experience from "./components/Experience.tsx"
import TechStack from "./components/TechStack.tsx"
import Projects from "./components/Projects.tsx"
import Certifications from "./components/Certifications.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"
import { useScrollAnimation } from './lib/useScrollAnimation'

function App() {
  useScrollAnimation()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-[80%] mx-auto pt-24 pb-12">
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
