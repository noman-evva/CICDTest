import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const EVVANAME = process.env.EVVA_NAME
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
    ${EVVANAME}
      </header>
    </div>
  );
}

export default App;
