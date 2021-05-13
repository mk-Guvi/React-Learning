import React, { Component } from "react";
import ChildMount from "./ChildMount";
class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mk"
    };
    console.log("mount-constructor");
  }
  //static must be called and it has the access to props and states of constructor and it return new state
  static getDerivedStateFromProps(props, state) {
    console.log("mount- getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("mount-componentDidMount");
  }

  render() {
    console.log("mount-render");
    return (
      <>
        <h1>This is Class Component</h1>
        <ChildMount />
      </>
    );
  }
}
export default Mount;
