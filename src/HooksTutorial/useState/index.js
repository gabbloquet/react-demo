import React, {useState} from 'react'
import {Child} from "../useEffect";

export const UseStateTutorial = () => {
  const [stateNumber, setStateNumber] = useState(0);
  const number = 90;
  const string = 'Coucou, je suis la fameuse chaine de caractère';

  return (
    <>
      <h2>La valeur dans le parent est : {stateNumber}</h2>
      <Child theGivenNumber={number} theGivenString={string} modifyParentStateValue={setStateNumber}/>
    </>
  )
}
