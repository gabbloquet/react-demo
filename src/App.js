import React from 'react';
import './App.css';
import {UseContextTutorial} from "./HooksTutorial/useContext";

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
        {/*<UseReducerTutorial />*/}
        <UseContextTutorial />
      </div>
    </div>
  );
}

export default App;
