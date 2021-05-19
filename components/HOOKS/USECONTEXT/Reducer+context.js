import React, { useContext } from "react";
import { Context } from "../AppH";

const ReducerCon = () => {
  const count = useContext(Context);

  return (
    <>
      <h4>Count : {count.contextCount}</h4>
      {/* call the corresponding actions using the dispatch method */}
      <button
        onClick={() => {
          count.contextDispatch("Increament");
        }}
      >
        Increament
      </button>
      <button
        onClick={() => {
          count.contextDispatch("Decreament");
        }}
      >
        Decreament
      </button>
      <button
        onClick={() => {
          count.contextDispatch("Reset");
        }}
      >
        Reset
      </button>
    </>
  );
};

export default ReducerCon;
