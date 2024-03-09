import { performAIScan } from './handlers/aiHandler';
import { performPlagiarismScan } from './handlers/plagiarismHandler';
import { performAIPlagiarismScan } from './handlers/aiPlagiarismHandlers';
import React, { useState } from 'react';
import './App.css';

function App() {
  const actions = {
    ai: 'ai',
    plagiarism: 'plagiarism',
    ai_plagiarism: 'ai_plagiarism',
  }

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = async (action) => {
    // Perform different actions based on the button clicked
    switch (action) {
      case actions.ai:
        // TODO: Update UI based on API response
        await performAIScan(text);
        break;
      case actions.plagiarism:
        // TODO: Update UI based on API response
        await performPlagiarismScan(text);
        break;
      case actions.ai_plagiarism:
        // TODO: Update UI based on API response
        await performAIPlagiarismScan(text);
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
