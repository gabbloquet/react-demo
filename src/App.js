import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue dans l'application demo de Gabin
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCX59_d3qQWm4WQsVfUDO-Kw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voici sa chaine YouTube
        </a>
      </header>
    </div>
  );
}

export default App;
