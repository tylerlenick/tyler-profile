import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { About } from './components/About'
import { Social } from './components/Social';
import {useState, useEffect} from 'react';



function App() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App Parallax_background" style={{transform: `translateY(${ offsetY * 0.5}px`}}>
      <Navbar />
      <Social />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
