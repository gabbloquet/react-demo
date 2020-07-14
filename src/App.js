import React from 'react';
import './App.css';
import {Homepage} from "./Homepage";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2>Je suis le header</h2>
      </header>
      <body>
        <Homepage/>
      </body>
    </div>
  );
}

export default App;
