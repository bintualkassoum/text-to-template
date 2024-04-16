import React from 'react';
import './App.css';
import TemplateEditor from './TemplateEditor'; // Import the editor component
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h2>Template Editor</h2>
        <TemplateEditor />  {/* Insert the editor component */}
      </div>
    </div>
  );
}

export default App;