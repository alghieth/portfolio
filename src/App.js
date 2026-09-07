import './App.css';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BaredeImg from '../src/assist/img/barde.png'
import Navbar from './navbar/Navbar';
import Sidebars from './sideBar/Sidebar';
import Hero from './hero/Hero';
import Footer from './footer/Footer';
import About from './about/About';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Loader from './loader/Loader';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}

      <div className={`app-wrapper ${isLoading ? 'blur-content' : ''}`}>
        <Navbar />
        <Sidebars />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
