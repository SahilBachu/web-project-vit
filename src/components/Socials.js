import React from 'react';

function Socials() {
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/SahilBachu', icon: 'fab fa-github' }, 
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sahildb/', icon: 'fab fa-linkedin' }, 
    { name: 'Twitter (X)', url: 'https://x.com/BachuSahil', icon: 'fab fa-twitter' }, 
    
  ];

 

  return (
    <div className="page-content">
      <h2>Connect With Me 23BCE2283</h2>
      <p>You can find me on the following platforms:</p>
      <ul className="skills-list" style={{ listStyle: 'none', paddingLeft: '0' }}> 
        {socialLinks.map(link => (
          <li key={link.name} style={{ marginBottom: '10px' }}>
            
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;