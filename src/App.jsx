import Navbar from './section/nav/Navbar'
import Header from './section/header/Header'
import About from "./section/about/About"
import Experience from "./section/experience/Experience"
import Achievements from './section/achievement/Achievements'
import Portfolio from './section/portfolio/Portfolio'
import Testimonials from './section/testimonials/Testimonials'
import Contact from './section/contact/Contact'
import Footer from './section/'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Achievements />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
