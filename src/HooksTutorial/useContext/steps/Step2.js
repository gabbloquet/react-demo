import React from 'react';
import {FormContext} from "../index";
import {FORM_ACTIONS} from "../useContext.service";

export const Step2 = () => {
  const {form, formDispatcher} = React.useContext(FormContext);
  console.log(form);
  return (
    <div className="step2">
      <h1>Je suis la Step 2</h1>
      <input type="number" placeholder='123'
             onChange={e => formDispatcher({type: FORM_ACTIONS.ADD_NUMBER, payload: e.target.value})}/>
      <button onClick={() => formDispatcher({type: FORM_ACTIONS.CHANGE_STEP, payload: 'step-3'})}>
        Valider
      </button>
    </div>
  )
}
