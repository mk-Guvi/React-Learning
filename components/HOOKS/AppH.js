import React, { useReducer } from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseEffectCleanUp from "./UseEffectCleanUp";
import ReducerCon from "./USECONTEXT/Reducer+context";
import UseReducers from "./UseReducers";
import Com from "./USECONTEXT/Com";
import UseRef from "./UseRef";
import Custom from "./USECUSTOM/Custom";
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
export const Context = React.createContext();
const AppH = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {/* <UseState /> */}
      {/* commenting this to know about cleanup in useEffect */}
      {/* <UseEffect /> */}
      <Context.Provider
        value={{ contextCount: count, contextDispatch: dispatch }}
      >
        {/* <UseEffectCleanUp /> */}
        {/* <Com /> */}
        {/* <UseReducers /> */}
        {/* <UseRef /> */}
        <Custom />
        {/* For reducer+context */}
        {/* <ReducerCon /> */}
      </Context.Provider>
    </>
  );
};

export default AppH;
