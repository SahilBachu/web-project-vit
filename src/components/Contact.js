import React, { useState } from 'react';

function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '', 
    topics: { 
      html: false,
      css: false,
      javascript: false,
      react: false,
    },
    message: '',
    country: '', 
  });


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target; 

    if (type === 'checkbox') {
      
      setFormData(prevData => ({
        ...prevData, 
        topics: {
          ...prevData.topics, 
          [name]: checked
        }
      }));
    } else {
      
      setFormData(prevData => ({
        ...prevData, 
        [name]: value
      }));
    }
  };

 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('Form Data Submitted:', formData); 
    alert(`Thank you, ${formData.name}! Your message has been logged to the console.\n`);
    

    
    setFormData({
        name: '', email: '', interest: '',
        topics: { html: false, css: false, javascript: false, react: false },
        message: '', country: ''
    });
  };

  
  return (
    <div className="page-content">
      <h2>Contact Me - Sahil Bachu 23BCE2283</h2>
      <p>Fill out the form below to get in touch.</p>

      {/* === Form Element === */}
      <form onSubmit={handleSubmit}>

        {/* === Fieldset and Legend === */}
        <fieldset>
          <legend>Basic Information</legend>

          {/* === Text Input === */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              required 
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </fieldset>

        <fieldset>
            <legend>Your Interests</legend>

            {/* === Radio Buttons === */}
            <p>Primary Interest:</p>
            <div className="form-group-inline">
                <input
                type="radio"
                id="interest-learn"
                name="interest" 
                value="learning"
                checked={formData.interest === 'learning'}
                onChange={handleChange}
                />
                <label htmlFor="interest-learn">Learning Web Dev</label>
            </div>
             <div className="form-group-inline">
                <input
                type="radio"
                id="interest-collab"
                name="interest"
                value="collaboration"
                checked={formData.interest === 'collaboration'}
                onChange={handleChange}
                />
                <label htmlFor="interest-collab">Collaboration</label>
            </div>
             <div className="form-group-inline">
                <input
                type="radio"
                id="interest-other"
                name="interest"
                value="other"
                checked={formData.interest === 'other'}
                onChange={handleChange}
                />
                <label htmlFor="interest-other">Other</label>
            </div>
        </fieldset>


        <fieldset>
            <legend>Topics You Like (Checkboxes)</legend>
             {/* === Checkboxes === */}
            <div className="form-group-inline">
                <input
                    type="checkbox"
                    id="topic-html"
                    name="html"
                    checked={formData.topics.html} 
                    onChange={handleChange}
                />
                <label htmlFor="topic-html">HTML</label>
            </div>
             <div className="form-group-inline">
                 <input
                    type="checkbox"
                    id="topic-css"
                    name="css"
                    checked={formData.topics.css}
                    onChange={handleChange}
                />
                <label htmlFor="topic-css">CSS</label>
             </div>
             <div className="form-group-inline">
                 <input
                    type="checkbox"
                    id="topic-js"
                    name="javascript" // Note: key is 'javascript' in state
                    checked={formData.topics.javascript}
                    onChange={handleChange}
                />
                <label htmlFor="topic-js">JavaScript</label>
             </div>
              <div className="form-group-inline">
                 <input
                    type="checkbox"
                    id="topic-react"
                    name="react"
                    checked={formData.topics.react}
                    onChange={handleChange}
                />
                <label htmlFor="topic-react">React</label>
             </div>
        </fieldset>

        <fieldset>
            <legend>Details</legend>

            {/* === Select (Pulldown Menu / List Box) === */}
            {/* Note: A multi-select list box would use the 'multiple' attribute */}
            <div>
                <label htmlFor="country">Country (Optional):</label>
                <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="">--Please choose an option--</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="USA">USA</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            {/* === Text Area === */}
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                />
            </div>

        </fieldset>

        {/* === Button (Submit) === */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;