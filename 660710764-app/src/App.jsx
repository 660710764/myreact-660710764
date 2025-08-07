import React from 'react';
import logo from './silpakorn.png';
import './App.css';
import Hello from './Hello';
import Goodbye from './Goodbye';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Silpakron <code>src/App.js</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          อยากรู้ดูใต้คอมเม้น
        </a>
      </header>
      <Goodbye />
      <JSXExamples />
    </div>
  );
}

export default App;
