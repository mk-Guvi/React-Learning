import React, { Component } from "react"; //to use class import the {component} from react lib
import ComA from "./ComA";
import UserContext from "./useContext";
class ComB extends Component {
  render() {
    // static contextType=UserContext
    return (
      <>
        {/* Component-B By Context-Type : {this.context} */}
        <ComA />;
      </>
    );
  }
}

//step-2[Context-type]:Assgining the userCOntext to the required component
// ComB.contextType = UserContext;
export default ComB;
