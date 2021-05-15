import React, { Component } from "react"; //to use class import the {component} from react lib
import ChildRef from "./ChildRef";
class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }
  render() {
    return (
      <>
        {/* ref={this.componentRef}-this accesses the childComponent dom-Node */}
        <ChildRef ref={this.componentRef} />
        <button
          onClick={() => {
            //FocusInput();-it is method of childComponent
            this.componentRef.current.FocusInput();
          }}
        >
          Focus Button
        </button>
      </>
    );
  }
}
export default ParentRef;
