import React, { useState } from 'react';
import './App.css';

function App() {
  const actions = {
    ai: 'ai_scan',
    plagiarism: 'plagiarism_scan',
    ai_plagiarism: 'ai_plagiarism_scan',
  }

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = (action) => {
    // Perform different actions based on the button clicked
    switch (action) {
      case actions.ai:
        // Code for action 1
        console.log('Button 1 clicked');
        break;
      case actions.plagiarism:
        // Code for action 2
        console.log('Button 2 clicked');
        break;
      case actions.ai_plagiarism:
        // Code for action 3
        console.log('Button 3 clicked');
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <textarea
        className="big-text-box"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <div className="button-container">
        <button className="button" onClick={() => handleButtonClick(actions.ai)}>
          AI Scan
        </button>
        <button className="button" onClick={() => handleButtonClick(actions.plagiarism)}>
          Plagiarism Scan
        </button>
        <button className="button" onClick={() => handleButtonClick(actions.ai_plagiarism)}>
          AI Plagiarism Scan
        </button>
      </div>
    </div>
  );
}

export default App;
