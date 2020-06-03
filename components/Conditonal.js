import React, { Component } from "react";

class conditional extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    //IF ELSE METHOD:
    // if (this.state.isLoggedIn){
    //   return <div>Welcome MK</div>

    // }else{
    //   return <div>Welcome Guest</div>
    // }

    //ELEMENT VARIABLE METHOD:
    //let message
    //if(this.state.isLoggedIn){
    //message=<div>Welcome Mk</div>
    //}else{
    //message=<div>Welcome guest</div>
    //}
    //return <div>{message}</div>

    //TERNARY CONDITIONAL OPERATor(It can be used in inside JSX)
    //return(
    //  this.state.isLoggedIn?<div>Welcome MK</div>:<div>Welcome Guest</div>
    //)

    //Short Ciruit OPERATor:
    return (
      this.state.isLoggedIn && <div>Welcome Mk</div>
    ); /**It returns only when the condition is true or else nothing is executed*/
  }
}

export default conditional;
