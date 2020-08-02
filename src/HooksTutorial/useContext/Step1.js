import React from 'react';
import {FormContext} from "./index";

export const Step1 = () => {
  const {form, setForm, setPage} = React.useContext(FormContext);
  console.log(form);
  return (
    <div className="step1">
      <h1>Je suis la Step 1</h1>
      <input type="text" placeholder='latrampe' onChange={e => setForm({...form, name: e.target.value})}/>
      <button onClick={() => setPage('step-2')}>Valider</button>
    </div>
  )
}
