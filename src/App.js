import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavReact from './components/NavReact';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div >
      <NavReact />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
