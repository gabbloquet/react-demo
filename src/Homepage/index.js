import React from 'react';
import './Homepage.style.css'

export const Homepage = ({theGivenNumber, theGivenString, modifyParentStateValue}) => {
  return (
    <div className="homepage">
      {/*<h1>*/}
      {/*  Bienvenue dans l'application demo de Gabin*/}
      {/*</h1>*/}
      {/*<a*/}
      {/*  className="App-link"*/}
      {/*  href="https://www.youtube.com/channel/UCX59_d3qQWm4WQsVfUDO-Kw"*/}
      {/*  target="_blank"*/}
      {/*  rel="noopener noreferrer"*/}
      {/*>*/}
      {/*  Voici sa chaine YouTube*/}
      {/*</a>*/}
      {/*<h2>Le nombre sera affiché ici : {theGivenNumber}</h2>*/}
      {/*<h2>La string sera affiché ici : {theGivenString}</h2>*/}
      <p>Tu souhaites modifier le state de ton parent ?</p>
      <input
        type="number"
        placeholder="Entrez ici une valeur pour modifier la valeur du parent"
        onChange={(e) => modifyParentStateValue(e.target.value)}/>
    </div>
  );
}
