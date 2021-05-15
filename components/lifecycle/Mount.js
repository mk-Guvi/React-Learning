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

  shouldComponentUpdate() {
    console.log("mount-shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("mount-getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("mount-componentDidUPdate");
  }
  render() {
    console.log("mount-render");
    return (
      <>
        <h1>This is Class Component</h1>
        {/* Too trigger an update lifcycle we need to update props or state.so we use the button to change the state */}
        <button
          onClick={() => {
            this.setState({ name: "mohammed" });
          }}
        >
          change
        </button>
        <p>{`name: ${this.state.name}`}</p>
        <ChildMount />
      </>
    );
  }
}
export default Mount;

// Flow before button clicked:
// mount-constructor
//  mount- getDerivedStateFromProps
// mount-render
// Childmount-constructor
//  Childmount- getDerivedStateFromProps
// Childmount-render
// Childmount-componentDidMount
//  mount-componentDidMount

// Flow after button clicked:

// mount- getDerivedStateFromProps
//  mount-shouldComponentUpdate
// mount-render
//  Childmount- getDerivedStateFromProps
//  Childmount-shouldComponentUpdate
//  Childmount-render
// Childmount-getSnapshotBeforeUpdate
//  mount-getSnapshotBeforeUpdate
//  Childmount-componentDidUPdate
//  mount-componentDidUPdate
