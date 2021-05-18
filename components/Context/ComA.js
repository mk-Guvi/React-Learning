import React, { Component } from "react"; //to use class import the {component} from react lib
import { UserConsumer } from "./useContext";
// STEp-3:
class ComA extends Component {
  render() {
    return (
      <UserConsumer>
        {/* the consumer component calls a function with context value as parameter
        and returns with JSX element */}
        {(username) => {
          return <h1>{username}</h1>;
        }}
      </UserConsumer>
    );
  }
}
export default ComA;
