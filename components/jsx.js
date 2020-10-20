import React from "react";
//With JSX
//function jsx() {
// return (
//   <div className="any">
//     <h1 id="anything">This is jsx</h1>
//   </div>
// );
//}

//export default jsx;



//Without Jsx
//It requires minimum 3 parameters  for every tag
function NoJsx() {
  return React.createElement(
    "div",
    { id: "any", className: "any" },
    React.createElement("h1", null, "This is without jsx")//first parameter is the html tag(h1),second one is optional properties/attributes (like classname,id) else keep it as null and the third one is children.
  );
}


export default NoJsx;
