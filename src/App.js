import React, { Component } from "react";

// import {Fun} from '../components/functional';//this is called when you use exports with function itself
import Fun from '../components/functional';

import Class from "../components/class"

import NoJsx from "../components/jsx";

class App extends Component{
  render(){
    return(
    <div className="App">
      <Fun/>
      <Class/>
      <NoJsx/>
    </div>
    );
  }
}
export default App;
