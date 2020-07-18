import React, {useState} from 'react';
import {ShoesResearcher} from "./AutocompleteComponent";

export const AutocompleteTutorial = () => {
  const [selectedShoes, setSelectedShoes] = useState(null);

  return (
    <div className="homepage">
      <h1>Rechercher une paire de chaussures : </h1>
      <ShoesResearcher selectedShoes={selectedShoes} setSelectedShoes={setSelectedShoes}/>
      { selectedShoes ? (
        <p>La chaussure que vous avez selectionnée : {selectedShoes.brand} {selectedShoes.name}</p>
      ) : null}
    </div>
  );
}
