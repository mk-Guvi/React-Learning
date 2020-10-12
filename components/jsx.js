import React from "react";
//With JSX
//function jsx() {
// return (
//   <div className="any">
//     <h1 id="anything">This is jsx</h1>
//   </div>
// );
//}

//Without Jsx
//It requires minimum 3 parameters  for every tag
function NoJsx() {
  return React.createElement(
    "div",
    { id: "any", className: "any" },
    React.createElement("h1", null, "This is without jsx")
  );
}

//export default jsx;
export default NoJsx;
