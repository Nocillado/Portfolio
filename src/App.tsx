import './App.css'
import Header from "./components/Header.tsx"
import Hero from "./components/Hero.tsx"
import TechStack from "./components/TechStack.tsx"
import Projects from "./components/Projects.tsx"
import Footer from "./components/Footer.tsx"
import { useScrollAnimation } from './lib/useScrollAnimation'

function App() {
  useScrollAnimation()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-4xl mx-auto px-6 py-12">
        <Hero />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
