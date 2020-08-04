
export const FORM_ACTIONS = {
  ADD_NAME: 'add-name',
  ADD_NUMBER: 'add-number',
  CHANGE_STEP: 'change-step',
}

export const formState = {
  name: '',
  number: 0,
  step: 'step-1'
}

export const formReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case FORM_ACTIONS.ADD_NAME:
      return {...state, name: action.payload};
    case FORM_ACTIONS.ADD_NUMBER:
      return {...state, number: action.payload};
    case FORM_ACTIONS.CHANGE_STEP:
      return {...state, step: action.payload};
    default:
      return state;
  }
}
