import React, {useReducer} from 'react';
import {Step1} from "./steps/Step1";
import {Step2} from "./steps/Step2";
import {Step3} from "./steps/Step3";
import {formReducer, formState} from "./useContext.service";


const initialState = {
  form: null,
  formDispatcher: () => undefined,
}

export const FormContext = React.createContext(initialState);

export const UseContextTutorial = () => {
  const [form, formDispatcher] = useReducer(formReducer, formState);

  const stepToDisplay = () => {
    switch (form.step) {
      case "step-1":
        return <Step1 />
      case "step-2":
        return <Step2 />
      case "step-3":
        return <Step3 />
      default :
        return <Step1 />
    }
  }

  return (
    <FormContext.Provider value={{form: form, formDispatcher: formDispatcher}}>
      {stepToDisplay()}
    </FormContext.Provider>
  );
}
