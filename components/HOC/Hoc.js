import React from "react";

const WithCounter = (WrappedComponent, IncreamentNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

    render() {
      console.log(this.props.name);
      return (
        <WrappedComponent
          count={this.state.count}
          // since we need previous state to increament the value the argument of setState wil not be a object instead  it will call a function with previousState as parameter and return a newState
          increamentcount={() => {
            this.setState((prevState) => {
              return { count: prevState.count + IncreamentNumber };
            });
          }}
          //This allows us to accept any props from the child components
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default WithCounter;
