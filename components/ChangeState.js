import React from "react";

class Tom extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.Listen = this.Listen.bind(this); //to use own method in eventhandlers we need binding
  }
  //Listen() {
  //  this.setState({ count: this.state.count+1
  //  });
  //  console.log(this.state) 
  //}
  Listen(){
this.setState(prevState => {
return {
count:prevState.count + 1
}
})

  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>

        <button onClick={this.Listen}>click</button>
       
      </div>
    );
  }
}

export default Tom;
