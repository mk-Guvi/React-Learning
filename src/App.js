import React from "react";
import Fun from "../components/functional"; //functional component is added
import Clas from "../components/class"; //clss componenet is added
import Jsx from "../components/jsx";
import Props from "../components/Prop";
import States from "../components/State";
import SetStates from "../components/SetState";
import EventHandler from "../components/EventHandler";
import EventBind from "../components/EventBindings";
import ChangeState from "../components/ChangeState";
import ParentComponent from "../components/ParentComponent";
import Condtional from "../components/Conditonal";
import List from "../components/List";
function App() {
  return (
    <div>
      {/*  <Fun />
      <Clas />
      <Jsx />
      <Props Num="1" />
      <Props Num="2">
        // unknown contents
        <p>This is child property in props 1 obj</p>
        <p>This is child property in props 2 obj</p>
      </Props>
      <States />
      <SetStates />
      <h1> Events:</h1>
      <EventHandler />
      <EventBind/>
      <h1>Change State :</h1>
      <ChangeState/>
      <h1>ParentComponent</h1>
      <ParentComponent/>
      <h1>Condtional</h1>
      <Condtional/>
      
          
    */}
      <h1>List of Names</h1>
      <List />
    </div>
  );
}
export default App;
