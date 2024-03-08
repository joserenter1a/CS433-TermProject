import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    alert(text); // TODO: make call to handler function that performs API call here
  };

  return (
    <div className="App">
      <textarea
        className="big-text-box"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <button className="button" onClick={handleButtonClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
