import React from 'react';
import './Homepage.style.css'
import {ShoesResearcher} from "./containers/ShoesResearcher";

export const Homepage = () => {

  return (
    <div className="homepage">
      <h1>Rechercher une paire de chaussures : </h1>
      <ShoesResearcher />
    </div>
  );
}
