import React, { useState } from 'react'; 


function Home(props) { 
  const [hoverStatus, setHoverStatus] = useState('Hover over the paragraph below!');

  
  const handleMouseOver = (event) => {
    setHoverStatus('You are hovering over the intro!');
    
  };

  const handleMouseOut = (event) => {
    setHoverStatus('Hover over the paragraph above!');
   
  };


 
  return (
    <div className="page-content">
      <h2>Greetings!</h2>
      {/* Using inline style example */}
      <p style={{ fontStyle: 'italic', color: '#ccc' }}>
        Welcome to all recruiters, teachers, family or fellow students.
      </p>
      <p
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        My name is Sahil Bachu 23BCE2283, and I'm a CS student at VIT.
        This site showcases some of the basic React concepts I've learned
        and has ways to get in touch with me!
        Feel free to navigate through the sections using the buttons above.
      </p>

      {/* Displaying state */}
      <p className="hover-status">{hoverStatus}</p>

      {/* Basic button example */}
      <button onClick={() => alert('Button clicked on Home page!')}>
        Click Me (Home)
      </button>
    </div>
  );
}

export default Home;