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
import Ref from "../components/Ref";
import ParentRef from "../components/InputRef/ParentRef";
import List from "../components/List";
import Stylesheet from "../components/Stylesheet";
import Portals from "../components/Portals";
import Errorb from "../components/EB/ErrorB";
import Eb from "../components/EB/Eb";
import Com1 from "../components/HOC/Com1";
import Com2 from "../components/HOC/Com2";
import ComC from "../components/Context/ComC";
import { UserProvider } from "../components/Context/useContext";
import AppH from "../components/HOOKS/AppH";

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
      {/* <h1>List of Names</h1>
      <List /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Mount /> */}
      {/* <Ref /> */}
      {/* <ParentRef />
      <Portals /> */}
      {/* <Errorb>
        <Eb heroName="mk" />
      </Errorb>
      <Errorb>
        <Eb heroName="joker" />
      </Errorb> */}
      {/* name="mk"-this props will not be accepted in HOC if we dont use={...this.props} */}
      {/* <Com1 name="mk" />

      <Com2 /> */}
      {/*Step-2: <UserProvider>-to share the data to all the components wrap it with the provider .Here the data is value="mohammed which can be access by all the components under the provider component*/}
      {/* <UserProvider value="Mohammed">
        <ComC />
      </UserProvider> */}
      <AppH />
    </div>
  );
}
export default App;
