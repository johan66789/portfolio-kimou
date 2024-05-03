import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/NavBar';
import { useTypewriter } from 'react-simple-typewriter';
import About from './components/About';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  const [text] = useTypewriter({
    words:["Développeur junior.","Codeur.","Dévoloppeur web.","Backend."],
    loop:true,
    typeSpeed:25,
    deleteSpeed:30,
    delaySpeed:2000,
  });
  return (
    <div>
      <NavBar/>
      <div className="me">
        <div id='home'>
          <h1>Welcome,je suis <br /> Kimou Appiah <br /> johan junior</h1>
          <p className='subtitle'>Je suis <span>{text}</span></p>
        </div>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
