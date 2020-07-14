import React, {useState} from 'react';
import './App.css';
import {Homepage} from "./Homepage";

function App() {
  const [stateNumber, setStateNumber] = useState(0);
  const number = 90;
  const string = 'Coucou, je suis la fameuse chaine de caractère';

  return (
    <div className="App">
      <div className="topbar">
        <h2>Je suis le header</h2>
      </div>
      <div className="body">
        <h2>La valeur dans le parent est : {stateNumber}</h2>
        <Homepage theGivenNumber={number} theGivenString={string} modifyParentStateValue={setStateNumber}/>
      </div>
    </div>
  );
}

export default App;
