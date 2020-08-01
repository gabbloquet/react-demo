import React, {useReducer} from 'react';

const COUNT_ACTIONS = {
  INCREMENT: 'increment',
  INSERT_VALUE: 'insert-value',
  DECREMENT: 'decrement',
  ZERO: 'zero',
}

const reducer = (state, action) => {
  switch (action.type) {
    case COUNT_ACTIONS.INCREMENT:
      return { ...state, count: state.count++}
    case COUNT_ACTIONS.DECREMENT:
      return { ...state, count: state.count--}
    case COUNT_ACTIONS.ZERO:
      return { ...state, count: 0}
    case COUNT_ACTIONS.INSERT_VALUE:
      return { ...state, count: action.payload === '' ? 0 : action.payload}
    default :
      return state;
  }
}

const initialState = {
  count: 0
}

export const UseReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="use-reducer">
      <h1>Etat de mon compteur : {state.count}</h1>
      <button onClick={() => dispatch({type: COUNT_ACTIONS.INCREMENT})}>Incrémenter</button>
      <button onClick={() => dispatch({type: COUNT_ACTIONS.DECREMENT})}>Décrémenter</button>
      <button onClick={() => dispatch({type: COUNT_ACTIONS.ZERO})}>ZERO</button>
      <input onChange={e => dispatch({type: COUNT_ACTIONS.INSERT_VALUE, payload: e.target.value})}/>
    </div>
  )
}
