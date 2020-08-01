import React, {useReducer} from 'react';

const getCountState = (compteur) => {
  if(compteur === 0) {
    return 'zero'
  } else if (compteur > 0) {
    return 'plus'
  }
  return 'moins';
}

const reducer = (state, action) => {
  let newCompteur;
  let newCountState;
  switch (action.type) {
    case 'increment':
      newCompteur = state.count++;
      newCountState = getCountState(newCompteur);
      return { ...state, count: newCompteur, countState: newCountState}
    case 'decrement':
      newCompteur = state.count--;
      newCountState = getCountState(newCompteur);
      return { ...state, count: newCompteur, countState: newCountState}
    case 'zero':
      newCompteur = 0;
      newCountState = getCountState(newCompteur);
      return { ...state, count: newCompteur, countState: newCountState}
    default :
      return state;
  }
}

const initialState = {
  count: 0,
  countState: 'zero'
}

export const UseReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="use-reducer">
      <h1>Etat de mon compteur : {state.count}</h1>
      <button onClick={() => dispatch({type: 'increment'})}>Incrémenter</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Décrémenter</button>
      <button onClick={() => dispatch({type: 'zero'})}>ZERO</button>

      { state.countState === 'zero' ? (
        <p>Le compteur est à zero</p>
      ) : state.countState === 'plus' ? (
        <p>Le compteur est positif</p>
      ) : (
        <p>Le compteur est negatif</p>
      )}
    </div>
  )
}
