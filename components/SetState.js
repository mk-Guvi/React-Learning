import React, { Component } from "react"; //to use class import the {component} from react lib
class counter extends Component {
  constructor() {//constructor is a specific method that builds in to JS that initializes the parts of this class
    super();//super is req when constructor is used.It is  a global function ,It goes to the parent class and brings some of the features that our component clas can use it
    this.state = {
      count: 0
    };
  }
  increament() {
    //this.state.count= this.state.count+1;
    //console.log(this.state.count);
    //this.setState(
    //{
    //   count: this.state.count + 1
    // },
    //() => console.log("call back value is", this.state.count)
    //); //to overcome asynchronous execution cal back finction is used

    //console.log(this.state.count); //asynchronous execution
    this.setState(prevState => ({ count: prevState.count + 1 })); //when u have to update based on previous state make sure to pass in fuction as an argument instead of objects
    console.log(this.state.count);
  }
  increments() {
    //this is because react may group multiple setstate calls into single update for better performance
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
