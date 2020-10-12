import React, { Component } from "react";
import ChildComponent from "../components/ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent"
    };
    this.MyMethod = this.MyMethod.bind(this);
  }

  MyMethod(ChildName) {
    alert(`hello ${this.state.parentName} from ${ChildName}`);{/**to pass parameters from child component to parent component parameter(Childname) is included  */}
  }
  render() {
    return (
      <div>
        <ChildComponent MyMethodHandler={this.MyMethod}/>{/*parenthesis is not added because we are passing reference to the MyMethod-method  as a prop called MyMethodHandler*/}
      </div>
    );
  }
}
export default ParentComponent;
