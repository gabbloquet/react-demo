import React from 'react';
import {FormContext} from "../index";

export const Step3 = () => {
  const {form} = React.useContext(FormContext);

  return (
    <form className="step3">
      <h1>Je suis la Step 3</h1>
      <h2>Voici les informations que vous avez entré : </h2>
      <p>Name : {form.name}</p>
      <p>Number : {form.number}</p>
      <p>Félicitations !</p>
    </form>
  )
}
