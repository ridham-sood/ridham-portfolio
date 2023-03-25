import './App.css';
import Landing from './Component/Landing/Landing';
import About from './Component/About/About';
import Education from './Component/Education/Education';
import Skills from './Component/Skills/Skills';
import Contacts from './Component/Contacts/Contacts';
import Experience from './Component/Experience/Experience';

function App() {
  return (
    <div className='start-app'>
      <Landing />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contacts/>
    </div>
  );
}

export default App;
