import React from "react";
const pop = props => {
  return (
    <div>
      <h1>This is prop {props.Num} </h1>
      <h2>{props.children}</h2>
    </div>
  );
};

export default pop;
