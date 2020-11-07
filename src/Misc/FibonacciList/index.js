import React from 'react';
import './FibonacciList.css'

const FibonnaciList = () => {

  const getFibonacciList = (maxValuesToShow) => {
    let fibonacciTab = [0,1];
    for (let i = 0; i<maxValuesToShow; i++) {
      fibonacciTab[fibonacciTab.length] = fibonacciTab[i] + fibonacciTab[i+1];
    }
    return fibonacciTab;
  }

  const fibonacciList = getFibonacciList(100);

  return (
    <div className="App">
      <h2>There is the fibonnaci list : </h2>
      <div className="fibonnaci-style">
        {fibonacciList.map(element => <p>{element}</p>)}
      </div>
    </div>
  );
};

export default FibonnaciList;
