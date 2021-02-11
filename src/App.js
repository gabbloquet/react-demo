import React from 'react';
import './App.css';
import ErrorBoundaryTester from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      {/*<CharactersShowcase />*/}




      <div className="topbar">
        <h2>Hi folks !</h2>
      </div>
      <div className="body">
        {/* TODO: Decomment tutorial you want to see and import it ;) */}
        {/*<UseStateTutorial/>*/}
        {/*<AutocompleteTutorial/>*/}
        {/*<UseReducerTutorial />*/}
        {/*<UseContextTutorial />*/}
        {/*<FibonnaciList />*/}
        <ErrorBoundaryTester />
      </div>
    </div>
  );
}

export default App;
