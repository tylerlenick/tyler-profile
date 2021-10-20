import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
