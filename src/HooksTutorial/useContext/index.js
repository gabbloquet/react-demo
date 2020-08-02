import React, {useState} from 'react';
import {Step1} from "./Step1";
import {Step2} from "./Step2";
import {Step3} from "./Step3";

const initialState = {
  form: null,
  page: null,
  setForm: () => undefined,
  setPage: () => undefined
}

export const FormContext = React.createContext(initialState);

export const UseContextTutorial = () => {
  const [form, setForm] = useState({});
  const [page, setPage] = useState('step-1');

  const stepToDisplay = () => {
    switch (page) {
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
    <FormContext.Provider value={{form: form, setForm: setForm, setPage: setPage}}>
      {stepToDisplay()}
    </FormContext.Provider>
  );
}
