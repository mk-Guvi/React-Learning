import React from "react";
const pop = (props) => {
  // props.num="some"//props are not mutable
  return (
    <div>
      <h1>This is prop {props.Num} </h1>
      {/* to run unknown content(that is if we dont know the property name(like props.num) ) we use props.children */}
      <h2>{props.children}</h2>
    </div>
  );
};

export default pop;
