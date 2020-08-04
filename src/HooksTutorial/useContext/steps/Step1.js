import React from 'react';
import {FormContext} from "../index";
import {FORM_ACTIONS} from "../useContext.service";

export const Step1 = () => {
  const {form, formDispatcher} = React.useContext(FormContext);

  return (
    <div className="step1">
      <h1>Je suis la Step 1</h1>
      <input type="text" placeholder='latrampe' value={form.name}
             onChange={e => formDispatcher({type: FORM_ACTIONS.ADD_NAME, payload: e.target.value})}/>
      <button onClick={() => formDispatcher({type: FORM_ACTIONS.CHANGE_STEP, payload: 'step-2'})}>Valider</button>
    </div>
  )
}
