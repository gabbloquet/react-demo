import React from 'react';
import {FormContext} from "./index";

export const Step2 = () => {
  const {form, setForm, setPage} = React.useContext(FormContext);
  console.log(form);
  return (
    <div className="step2">
      <h1>Je suis la Step 2</h1>
      <input type="number" placeholder='123' onChange={e => setForm({...form, number: e.target.value})}/>
      <button onClick={() => setPage('step-3')}>Valider</button>
    </div>
  )
}
