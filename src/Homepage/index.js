import React from 'react';
import './Homepage.style.css'

export const Homepage = () => {
  return (
    <div className="homepage">
      <h1>
        Bienvenue dans l'application demo de Gabin
      </h1>
      <a
        className="App-link"
        href="https://www.youtube.com/channel/UCX59_d3qQWm4WQsVfUDO-Kw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voici sa chaine YouTube
      </a>
    </div>
  );
}
