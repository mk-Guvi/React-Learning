import React, { Component } from "react";
class ErrorB extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  //it receives error as parameter
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }

  // componentDidCatch logs the error and the information about the error
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>something Went wrong</h1>;
    }
    return this.props.children;
  }
}
export default ErrorB;
