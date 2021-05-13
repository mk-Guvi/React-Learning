import React from "react";
import "./stylesheet.css";
function Stylesheet({ primary }) {
  let styles = {
    color: "grey",
    fontSize: "3rem"
  };
  let className = primary ? "primary" : "";
  return (
    <>
      <h1 className={`${className} fontxl`}>External</h1>
      <h1 style={styles}>Inline</h1>
    </>
  );
}
// export function add() {.. this allows us to import with exact function name and show import it with  brackets {add}
//   return <h1>This is Functional component</h1>;
// }
export default Stylesheet; //this allows to give any name in import section
