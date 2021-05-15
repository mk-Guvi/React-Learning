import React from "react";
import ReactDom from "react-dom";
function Portals() {
  //ReactDom.createPortal requires JSX/elements/components as First Parameter and second parameter is the dom-node where the element is to be mounted.
  return ReactDom.createPortal(
    <h1>PORTALS</h1>,
    document.getElementById("portal-root")
  );
}

export default Portals;
