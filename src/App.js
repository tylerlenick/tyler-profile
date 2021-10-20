import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { About } from './components/About'
import { Social } from './components/Social';



function App() {
  return (
    <div className="App">
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
