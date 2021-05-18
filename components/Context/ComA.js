import React, { Component } from "react"; //to use class import the {component} from react lib
import { UserConsumer } from "./useContext";
import { User2Context } from "../Context/useContext";
// STEp-3:
class ComA extends Component {
  render() {
    return (
      <UserConsumer>
        {/* the consumer component calls a function with context value as parameter
        and returns with JSX element */}
        {(provider_1) => {
          return (
            <User2Context.Consumer>
              {(user) => {
                return (
                  <h3>
                    Provider-1 {provider_1} <br />
                    Provider-2 {user}
                  </h3>
                );
              }}
            </User2Context.Consumer>
          );
        }}
      </UserConsumer>
    );
  }
}
export default ComA;
