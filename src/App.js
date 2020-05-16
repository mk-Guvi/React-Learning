import React from "react";
import Fun from "../components/functional"; //functional component is added
import Clas from "../components/class"; //clss componenet is added
import Jsx from "../components/jsx";
import Props from "../components/Prop";
import States from "../components/State";
function App() {
  return (
    <div>
      <Fun />
      <Clas />
      <Jsx />
      <Props Num="1" />
      <Props Num="2">
        <p>This is child property in props 1 obj</p>
        <p>This is child property in props 2 obj</p>
      </Props>
      <States />
    </div>
  );
}
export default App;
