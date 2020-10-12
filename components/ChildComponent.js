import React from "react";
function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.MyMethodHandler("Child")}>Parent</button>
      {/**MyMethodhandler is a prop from parent Component */}
      {/**to pass parameters from child component to parent component arrow functions are used .Here parameter is a string "Child"*/}
    </div>
  );
}
export default ChildComponent;
