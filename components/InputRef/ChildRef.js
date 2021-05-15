import React, { Component } from "react"; //to use class import the {component} from react lib
class ChildRef extends Component {
  constructor(props) {
    super(props);
    // creating this.inputRef so that we can use React.createRef at required fields
    this.inputRef = React.createRef();
  }
  //a method that is passed as props in parent component
  FocusInput() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
      </>
    );
  }
}
export default ChildRef;
