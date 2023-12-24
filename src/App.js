import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [output, setOutput] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [len, setLen] = useState(0);
  const [formattedText, setFormattedText] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);

    if (newText.length === 7) {
      setLen(newText.length);
      setOutput('THALA FOR A REASON');
      setIsPlaying(true);
    } else {
      setOutput('');
      setIsPlaying(false);
    }

      setFormattedText(newText.toUpperCase().split('').join('+'));
  };

  return (
    <div className="App">
      <h1>Thala Project</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter a 7 Letter Word"
        maxLength={7}
      />
      <br/>
      <h3>{output && `${formattedText} = ${len}`}</h3>
      {output && <h1 className='output'>{output}</h1>}

      <ReactPlayer
        url="http://localhost:3000/thala.mp4" 
        playing={isPlaying}
        controls={false}
        width="100%"
      />
    </div>
  );
}

export default App;
