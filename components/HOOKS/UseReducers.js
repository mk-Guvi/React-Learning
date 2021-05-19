import React, { useReducer } from "react"; //step-1 import userReducer

// step-2 defining initialstate and reducer function

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

//change the initial state to object
// const initialState = { firstCounter: 0, secondCounter: 10 };

// const reducer = (state, action) => {
//   //action is changed to object that has a property named type
//   switch (action.type) {
//     case "Increament":
//       //since we have two properites in the initial state object we se spread operator
//       return { ...state, firstCounter: state.firstCounter + action.value };
//     case "Decreament":
//       return { ...state, firstCounter: state.firstCounter - action.value };
//     case "Decreament2":
//       return { ...state, secondCounter: state.secondCounter - action.value };
//     case "Increament2":
//       return { ...state, secondCounter: state.secondCounter + action.value };
//     case "Reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

const UseReducers = () => {
  //step-3:call the useReducer function with reducer and initialstate as paramters
  //note:userreducers returns two values  that is current value and the dispatch method that allows us to execute the code corresponding to the action
  const [count, dispatch] = useReducer(reducer, initialState);

  //when dealing with multiple state variables that have same state transitions it is a good idea to have multiple usereducers making use of same reducer functions which can avoid the merging the state if it is an object and also prevent us from duplicating the code in the reducer functions
  const [count2, dispatch2] = useReducer(reducer, initialState);
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
      <br />
      <h1>MULTIPLE USEREDUCERS</h1>
      <h4>Counter- {count2}</h4>

      <button
        onClick={() => {
          dispatch2("Increament");
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          dispatch2("Decreament");
        }}
      >
        Decreament
      </button>

      <button
        onClick={() => {
          dispatch2("Reset");
        }}
      >
        Reset
      </button>
    </>

    // <>
    //   {/* since the initial state is object we need to call the value */}
    //   <h4>Counter1- {count.firstCounter}</h4>
    //   <h4>Counter2- {count.secondCounter}</h4>
    //   {/* call the corresponding actions using the dispatch method */}
    //   <button
    //     //by converting actions into object we can use additional data[value] in the reducer functions
    //     // we convert string action into an object which contains a property "type"  with string[Increament..] as its value

    //     //we can add value property that can be used to change the with certain value
    //     onClick={() => {
    //       dispatch({ type: "Increament", value: 1 });
    //     }}
    //   >
    //     Increament
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "Decreament", value: 1 });
    //     }}
    //   >
    //     Decreament
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "Increament", value: 5 });
    //     }}
    //   >
    //     Increament 5
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "Decreament", value: 5 });
    //     }}
    //   >
    //     Decreament 5
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "Decreament2", value: 1 });
    //     }}
    //   >
    //     Decreament counter 2
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "Increament2", value: 1 });
    //     }}
    //   >
    //     Increament counter 2
    //   </button>
    //   <button
    //     onClick={() => {
    //       dispatch({ type: "Reset" });
    //     }}
    //   >
    //     Reset
    //   </button>
  );
};

export default UseReducers;
