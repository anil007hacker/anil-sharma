import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Qualifications from './Components/Qualifications/Qualifications';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualifications />
        <Contacts />
      </main>
    </>
  );
}

export default App;
