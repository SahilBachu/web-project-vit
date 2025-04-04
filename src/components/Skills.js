import React, { useState } from 'react';

function Skills() {
 
  const coreSkills = ['HTML', 'CSS', 'JavaScript', 'React Basics', 'Java', 'C++', 'Python'];
  const tools = ['VS Code', 'Git', 'npm', 'React '];

  
  const [listHover, setListHover] = useState('');

  
  const handleItemMouseOver = (skillName) => {
    setListHover(`Hovering over: ${skillName}`);
  };

  const handleItemMouseOut = () => {
    setListHover('');
  };

  
  const renderSkillsWithForLoop = (skillsArray) => {
    let skillElements = [];
    for (let i = 0; i < skillsArray.length; i++) {
      const skill = skillsArray[i];
      skillElements.push(
        <li
          key={`for-${skill}`} 
          onMouseOver={() => handleItemMouseOver(skill)}
          onMouseOut={handleItemMouseOut}
        >
          {skill}
        </li>
      );
    }
    return skillElements;
  };

   
   const renderToolsWithWhileLoop = (toolsArray) => {
    let toolElements = [];
    let i = 0;
    while (i < toolsArray.length) {
      const tool = toolsArray[i];
      toolElements.push(
        <li
            key={`while-${tool}`}
            onMouseOver={() => handleItemMouseOver(tool)}
            onMouseOut={handleItemMouseOut}
        >
            {tool}
        </li>
      );
      i++;
    }
    return toolElements;
   }

   
   const [doWhileCounter, setDoWhileCounter] = useState(0);
   const handleDoWhileClick = () => {
     let counter = doWhileCounter;
     let message = "Do-While Log:\n";
     if (counter >= 3) { 
        counter = 0;
     }
     do {
        message += ` - Count: ${counter}\n`;
        counter++;
     } while (counter < 3);
     setDoWhileCounter(counter); 
     alert(message); 
   };


  // === JSX ===
  return (
    <div className="page-content">
      <h2>My Skills 23BCE2283</h2>

      {}
      {}
      {}

      <h3>Core  Technologies:</h3>
      <ul className="skills-list">
        {renderSkillsWithForLoop(coreSkills)}
      </ul>

      <h3>Tools & Environment:</h3>
       <ul className="skills-list">
        {renderToolsWithWhileLoop(tools)}
       </ul>

      {/* Display hover status */}
      <p className="hover-status">{listHover}</p>

       {/* Button demonstrating do-while loop */}
       <button className="loop-button" onClick={handleDoWhileClick}>
        Run Do-While Loop (Alert)
      </button>
      <p style={{fontSize: '0.8em', color: '#aaa'}}>Click count: {doWhileCounter} (resets after 3)</p>


    </div>
  );
}

export default Skills;