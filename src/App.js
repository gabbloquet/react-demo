import React from 'react';
import './App.css';
import {Homepage} from "./Homepage";

function App() {

  const number = 90;
  const string = 'Coucou, je suis la fameuse chaine de caractère';

  return (
    <div className="App">
      <div className="topbar">
        <h2>Je suis le header</h2>
      </div>
      <div className="body">
        <Homepage theGivenNumber={number} theGivenString={string}/>
      </div>
    </div>
  );
}

export default App;
