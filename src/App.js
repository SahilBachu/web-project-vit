import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Contact from './components/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [myName, setMyName] = useState('Sahil Bachu 23BCE2283'); 

  useEffect(() => {
    document.title = `Portfolio - ${activePage.charAt(0).toUpperCase() + activePage.slice(1)}`;
  }, [activePage]);


  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home key="home" name={myName} />;
      case 'skills':
        return <Skills key="skills" />;
      case 'socials':
        return <Socials key="socials" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <Home key="home" name={myName} />;
    }
  };

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <h1>Sahil Bachu 23BCE2283 Portfolio</h1>

      <nav>
        <button
          onClick={() => handleNavClick('home')}
          className={activePage === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          onClick={() => handleNavClick('skills')}
          className={activePage === 'skills' ? 'active' : ''}
        >
          Skills
        </button>
        <button
          onClick={() => handleNavClick('socials')}
          className={activePage === 'socials' ? 'active' : ''}
        >
          Socials
        </button>
        <button
          onClick={() => handleNavClick('contact')}
          className={activePage === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </nav>

      <main>
        {renderPage()}
      </main>

      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '0.9em', color: '#888', borderTop: '1px solid #444', paddingTop: '20px' }}>
        <p>© {new Date().getFullYear()} {myName}. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;