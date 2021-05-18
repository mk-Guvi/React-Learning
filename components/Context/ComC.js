import React, { Component } from "react"; //to use class import the {component} from react lib
import ComB from "./ComB";
class ComC extends Component {
  render() {
    return <ComB />;
  }
}
export default ComC;
