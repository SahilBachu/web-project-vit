import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'; 
import App from './App';    

const rootElement = document.getElementById('root'); 


if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
   console.error("Fatal Error: Root element with ID 'root' was not found in the HTML.");

   document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Could not find the root HTML element to attach React. Check public/index.html for <div id="root"></div> and check src/index.js.</div>';
}