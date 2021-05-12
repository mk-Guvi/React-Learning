import React, { Component } from "react";
class stat extends Component {
  //this is required because we extend react component class and call has to be made to base class constructor

  constructor() {
    super();
    this.state = {
      Name: "Welcome Musharaf"
    };
  }
  changeMessage() {
    this.setState({
      //setstate is used to change the state
      Name: "thanks"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.Name}</h1>
        <button onClick={() => this.changeMessage()}>
          Subscribe{this.setState.Message}
        </button>{" "}
      </div> //this.changeMessage() is Event HAndler
    );
  }
}
export default stat;
