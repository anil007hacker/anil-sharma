import './App.css';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
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
        <Footer />
      </main>
    </>
  );
}

export default App;
