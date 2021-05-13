import React, { Component } from "react";
class ChildMount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "mk"
    };
    console.log("Childmount-constructor");
  }
  //static must be called and it has the access to props and states of constructor and it return new state
  static getDerivedStateFromProps(props, state) {
    console.log("Childmount- getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("Childmount-componentDidMount");
  }

  render() {
    console.log("Childmount-render");
    return <h1>This is Class child-Component</h1>;
  }
}
export default ChildMount;
