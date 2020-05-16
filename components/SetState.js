import React, { Component } from "react"; //to use class import the {component} from react lib
class counter extends Component {
  constructor(){
    super()
this.state={
  count: 0
}
Increament(){
this.setState()=({
  count: this.state.count+1
})
}
  }
  render() {
    return(<div> <h1>Current Count: {this.state.count}</h1>
    <button onClick={()=>this.Increament()}>Increament</button></div>)
  }
}
export default counter;