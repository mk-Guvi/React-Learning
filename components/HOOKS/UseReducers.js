import React, { useReducer } from "react"; //step-1 import userReducer
//step-2 defining initialstate and reducer function

const initialState = 0;
//this reducer function returns a newstate by  receiving current state and action[which changes the state of the function] as parameters

const reducer = (state, action) => {
  //usually switch statement is used to change the state based the action

  switch (action) {
    case "Increament":
      return state + 1;
    case "Decreament":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducers = () => {
  //step-3:call the useReducer function with reducer and initialstate as paramters
  //note:userreducers returns two values  that is current value and the dispatch method that allows us to execute the code corresponding to the action
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h4>Count- {count}</h4>
      {/* call the corresponding actions using the dispatch method */}
      <button
        onClick={() => {
          dispatch("Increament");
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch("Decreament");
        }}
      >
        Decreament
      </button>
      <button
        onClick={() => {
          dispatch("Reset");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default UseReducers;
