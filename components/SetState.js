import React, { Component } from "react"; //to use class import the {component} from react lib
class counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increament() {
    //this.state.count= this.state.count+1;
    //console.log(this.state.count);
    this.setState(
      {
        count: this.state.count + 1
      },
      () => console.log("call back value is", this.state.count)
    ); //to overcome asynchronous execution cal back finction is used
    console.log(this.state.count); //asynchronous execution
  }
  render() {
    return (
      <div>
        <h1>current count : {this.state.count}</h1>
        <button onClick={() => this.increament()}>Increament</button>
      </div>
    );
  }
}
export default counter;
s