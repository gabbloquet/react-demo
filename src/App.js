import React from 'react';
import './App.css';
import FibonnaciList from "./Misc/FibonacciList";

function App() {
  return (
    <div className="App">
      <div className="topbar">
        <h2>Hi folks !</h2>
      </div>
      <div className="body">
        {/* TODO: Decomment tutorial you want to see and import it ;) */}
        {/*<UseStateTutorial/>*/}
        {/*<AutocompleteTutorial/>*/}
        {/*<UseReducerTutorial />*/}
        {/*<UseContextTutorial />*/}
        <FibonnaciList />
      </div>
    </div>
  );
}

export default App;
