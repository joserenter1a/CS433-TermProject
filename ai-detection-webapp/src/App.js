import { performAIScan } from './handlers/aiHandler';
import { performPlagiarismScan } from './handlers/plagiarismHandler';
import { performAIPlagiarismScan } from './handlers/aiPlagiarismHandlers';
import { AIScanResult } from './components/aiResults/aiScanResultsComponent'
import React, { useState } from 'react';
import './App.css';

function App() {
  const actions = {
    ai: 'ai',
    plagiarism: 'plagiarism',
    ai_plagiarism: 'ai_plagiarism',
  }

  const [text, setText] = useState('');
  const [aiScanResult, setAIScanResult] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = async (action) => {
    try {
      let response;
      
      switch (action) {
        case actions.ai:
          response = await performAIScan(text);
          setAIScanResult(response);
          break;
        case actions.plagiarism:
          response = await performPlagiarismScan(text);
          console.log('Plagiarism Score:', response.plagiarismScore);
          break;
        case actions.ai_plagiarism:
          response  = await performAIPlagiarismScan(text);
          console.log('AI Score:', response.aiScore);
          console.log('Human Score:', response.humanScore);
          console.log('Plagiarism Score:', response.plagiarismScore);
          break;
        default:
          break;
      }

    } catch (e) {
      console.error('Error:', e.message);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Authenticity Master</h1>
        <h2 className="slogan">Bringing You the Truth, Because Lies are Just too Mainstream!</h2>
        <p className="description">
          Whether you're verifying the source of emails, fact checking news articles, 
          double checking suspicious links or just curious about the origin piece of a text, we got you covered. 
          With a powerful AI algorithms and plagiarism detection technology, we sift through the digital haystack 
          to bring you the truth one scan at a time.
        </p>
      </div>
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
      {aiScanResult && <AIScanResult response={aiScanResult} />}
    </div>
  );
}

export default App;
