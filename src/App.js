import './App.css';
import React, { useState, useEffect } from 'react';
import ui from './images/Community Cover (1).png';

function App() {
  const [email, setEmail] = useState("");
  const [emailsList, setEmailsList] = useState([]);
  const [messageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    // Retrieve and display emails when the component mounts
    const storedEmails = JSON.parse(localStorage.getItem('emails')) || [];
    setEmailsList(storedEmails);
  }, []);

  const handleJoinWaitlist = () => {
    const currentEmails = JSON.parse(localStorage.getItem('emails')) || [];
    currentEmails.push(email);
    localStorage.setItem('emails', JSON.stringify(currentEmails));
    setEmailsList(currentEmails);  // Update the local state to display the new list
    setMessageVisible(true);
    setEmail('');  // Clear the input field
  }

  return (
    <div className='container'>
      <div className='titleAndBio'>
        <h3 className='title'>
          ProSwipe
        </h3>
        <div className='bio'>
          A better way to find jobs.
        </div>
        <div className='button'>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email'></input>
          <button className="modern-button" onClick={handleJoinWaitlist}>Join Waitlist</button>
        </div>
        {messageVisible && <div>You will receive emails on updates of the company!</div>}
      </div>
      {/* <div className='emails-display'>
        <h4>Registered Emails:</h4>
        <ul>
          {emailsList.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div> */}
      <div className='picture'>
        <img src={ui} alt='Community Cover'/>
      </div>
    </div>
  );
}

export default App;
