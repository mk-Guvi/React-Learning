import React, { Component } from "react"; //to use class import the {component} from react lib
class counter extends Component {
  constructor() {
    //constructor is a specific method that builds in to JS that initializes the parts of this class
    super(); //super is req when constructor is used.It is  a global function ,It goes to the parent class and brings some of the features that our component class can use it
    this.state = {
      count: 0
    };
  }
  increament() {
    //this.state.count= this.state.count+1;//this will not update the UI(that is the dom is not rerendered) but update the state

    //console.log(this.state.count);
    //this.setState(
    //{
    //   count: this.state.count + 1
    // },
    //() => console.log("call back value is", this.state.count)
    //); //to overcome asynchronous execution cal back finction is used

    //console.log(this.state.count); //the updated data is not displayed as it will be asynchronous call thats why we pass conosle.log() as second parameter in setState

    //when u have to update based on previous state make sure to pass in fuction as an argument instead of objects
    //we can also pass props-object in setState
    this.setState((prevState, props) => ({ count: prevState.count + 1 }));
    console.log(this.state.count);
  }
  increments() {
    //Below the function is  is called multiple times so that the intial state(0) get added by 1 as much times the function is called but if  you use setState without prevState as argument then it will use the function for onece this is because react may group multiple setstate calls into single update for better performance that is all function calls are done in one go.
    this.increament();
    this.increament();
    this.increament();
    this.increament();
  }

  render() {
    return (
      <div>
        <h1>current count : {this.state.count}</h1>
        <button onClick={() => this.increments()}>Increament</button>
      </div>
    );
  }
}
export default counter;
