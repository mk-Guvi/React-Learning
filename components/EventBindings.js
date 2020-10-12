//"this" keyword is undefned in eventhandler that is why evnt binding is important in React
import React, { Component } from "react";
class event extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome"
    }
   this.clickHandler=this.clickHandler.bind(this)
  } //For Method 4 remove this
  
  
   clickHandler() {
    this.setState({
      message: "Good Bye"
    })
    console.log(this);
  }
//Method 4
/*click=()=>{
this.setState({
  message:"goodmorning"
})
}*/

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> :: Method :1*/}
        {/*<button onClick={()=>this.clickHandler()}>Click</button>::Method:2..In this we use "()"because we are calling the eventhandler and returning the value */}
        <button onClick={this.clickHandler}>Click</button>
   {/*     <button onClick={this.click}>click</button>::Method 4 Currently in update*/}        
      </div>
    );
  }
}

export default event  