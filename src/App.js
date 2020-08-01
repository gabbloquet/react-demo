import React from 'react';
import './App.css';
import {UseReducerTutorial} from "./HooksTutorial/UseReducer";

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h2>Je suis le header</h2>
      </div>
      <div className="body">
        {/* TODO: Decomment tutorial you want to see and import it ;) */}
        {/*<UseStateTutorial/>*/}
        {/*<AutocompleteTutorial/>*/}
        <UseReducerTutorial />
      </div>
    </div>
  );
}

export default App;
