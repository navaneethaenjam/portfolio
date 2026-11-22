import { About } from "./components/About"
import { Achievements } from "./components/Achievements"
import { Ambient } from "./components/Ambient"
import { Beyond } from "./components/Beyond"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Nav } from "./components/Nav"
import { ScrollProgress } from "./components/ScrollProgress"
import { Skills } from "./components/Skills"
import { Tour } from "./components/Tour"
import { Work } from "./components/Work"

export default function App() {
  return (
    <>
      <Ambient />
      <ScrollProgress />
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Achievements />
        <Beyond />
        <Contact />
      </main>
      <Footer />
      <Tour />
    </>
  )
}
