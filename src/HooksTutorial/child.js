import React, {useEffect, useState} from "react";

export const Child = ({theGivenNumber, theGivenString, modifyParentStateValue}) => {
  const [compteur, setCompteur] = useState(0);
  const [double, setDouble] = useState(0);
  const [sayCongratulations, setSayCongratulations] = useState(false);

  useEffect(() => {
    setDouble(compteur * 2);
    if(compteur >= 10)
      setSayCongratulations(true);
  }, [compteur])

  return (
    <>
      <h2>Le nombre sera affiché ici : {theGivenNumber}</h2>
      <h2>La string sera affiché ici : {theGivenString}</h2>
      <p>Tu souhaites modifier le state de ton parent ?</p>
      <input
        type="number"
        placeholder="Entrez ici une valeur pour modifier la valeur du parent"
        onChange={(e) => modifyParentStateValue(e.target.value)}/>

      <hr/>

      <h1>Voici notre nouveau compteur : {compteur}</h1>
      <h2>Voici la valeur du double de notre compteur : {double}</h2>
      <div className="div-increment">
        <button onClick={() => setCompteur(compteur + 1)}>
          Cliquez ici pour incrémenter le compteur
        </button>
      </div>
      { sayCongratulations ? (
        <h1 className="congratulations-message">CONGRATULATIONS !</h1>
      ) : null}
    </>
  )
}
