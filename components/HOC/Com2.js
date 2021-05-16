import React, { Component } from "react";
import WithCounter from "./Hoc";
class Com2 extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  // }
  // increamentcount() {
  //   // since we need previous state to increament the value the argument of setState wil not be a object instead  it will call a function with previousState as parameter and return a newState
  //   this.setState((prevState) => {
  //     return { count: prevState.count + 1 };
  //   });
  // }
  render() {
    // const { count } = this.state;
    const { count, increamentcount } = this.props;
    return <h1 onMouseOver={() => increamentcount()}>Hover{count}</h1>;
  }
}
export default WithCounter(Com2, 2);
